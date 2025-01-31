const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();
const db = require('./db');
const crops = require('./crops');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const SECRET_KEY = process.env.SECRET_KEY;
const JWT_SECRET = process.env.JWT_SECRET || '1903@kp';

// Serve static files
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../front-end')));

// HTML Routes
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/index.html'));
});

router.get('/learning.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/learning.html'));
});

router.get('/shop.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/shop.html'));
});

router.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/about.html'));
});

// API Routes
router.post('/api/getCropDetails', (req, res) => {
  const { cropName, lang } = req.body;
  const formattedName = cropName.charAt(0).toUpperCase() + cropName.slice(1).toLowerCase();

  try {
    const cropClass = crops[formattedName];
    if (cropClass) {
      const cropData = new cropClass(lang || 'en');
      res.json(cropData);
    } else {
      res.status(404).json({ error: 'Crop not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Render dynamically products
app.use('/assets', express.static(path.join(__dirname, '../front-end/assets')));
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
});

// Authentication Routes
router.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  console.log({ username, email, password });

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const userCheckQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(userCheckQuery, [email], async (err, results) => {
      if (err) return res.status(500).json({ error: 'Database query error' });
      
      if (results.length > 0) {
        return res.status(409).json({ error: 'User already exists with this email' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      
      db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: 'User registration failed' });
        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Code to log in the user
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], async (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      
      if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const token = jwt.sign(
          { userId: user.id, username: user.username }, 
          JWT_SECRET, 
          { expiresIn: '1h' }
        );
        res.json({ 
          token, 
          username: user.username,
          message: 'Login successful' 
        });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  
  if (!bearerHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = bearerHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Add item to cart
app.post('/api/cart/add', verifyToken, (req, res) => {
  const { product_name, price, image_url, quantity } = req.body;
  const userId = req.user.userId;

  const query = `INSERT INTO cart (user_id, product_name, price, image_url, quantity) VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [userId, product_name, price, image_url, quantity], (err) => {
    if (err) {
      console.error('Error adding to cart:', err);
      return res.status(500).json({ error: 'Failed to add item to cart' });
    }
    res.status(201).json({ message: 'Item added to cart' });
  });
});



// Get cart items
app.get('/api/cart/items', verifyToken, (req, res) => {
  const userId = req.user.userId;

  const query = `SELECT * FROM cart WHERE user_id = ? ORDER BY cart_id DESC`;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching cart items:', err);
      return res.status(500).json({ error: 'Failed to fetch cart items' });
    }
    res.json(results);
  });
});

// Update cart item quantity
app.put('/api/cart/update/:cartId', verifyToken, (req, res) => {
  const { cartId } = req.params;
  const { quantity } = req.body;
  const userId = req.user.userId;

  const query = `UPDATE cart SET quantity = ? WHERE cart_id = ? AND user_id = ?`;

  db.query(query, [quantity, cartId, userId], (err) => {
    if (err) {
      console.error('Error updating quantity:', err);
      return res.status(500).json({ error: 'Failed to update quantity' });
    }
    res.json({ message: 'Quantity updated' });
  });
});

// Remove item from cart
app.delete('/api/cart/remove/:cartId', verifyToken, (req, res) => {
  const { cartId } = req.params;
  const userId = req.user.userId;

  const query = `DELETE FROM cart WHERE cart_id = ? AND user_id = ?`;

  db.query(query, [cartId, userId], (err) => {
    if (err) {
      console.error('Error removing item:', err);
      return res.status(500).json({ error: 'Failed to remove item' });
    }
    res.json({ message: 'Item removed from cart' });
  });
});

// Mount router after all routes are defined
app.use('/', router);

// Handle unmatched routes - this should come after the router
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
