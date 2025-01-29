const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());
const SECRET_KEY = '1903@PriyANSHU@Cooks@2021';

// Serve static files (Bootstrap, styles, images)
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../front-end')));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/index.html'));
});

app.get('/learning.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/learning.html'));
});

app.get('/shop.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/shop.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/about.html'));
});

// this section contains the code for the crop search functionality
const crops = require('./crops');

app.post('/api/getCropDetails', (req, res) => {
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







// Handle unmatched routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
