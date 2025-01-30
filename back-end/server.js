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

router.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email = ?`;
  db.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    
    if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token, username: user.username });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
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