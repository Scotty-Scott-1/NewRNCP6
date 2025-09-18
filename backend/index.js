const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from React/Vite build
app.use(express.static(path.join(__dirname, 'public')));

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Catch-all route for SPA
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

