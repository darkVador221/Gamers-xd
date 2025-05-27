const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

require('events').EventEmitter.defaultMaxListeners = 500;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/server', require('./qr'));
app.use('/code', require('./pair'));

// Static HTML files
app.use('/pair', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'pair.html'));
});
app.use('/qr', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'qr.html'));
});
app.use('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'main.html'));
});

app.listen(PORT, () => {
  console.log(` Don't Forget To Give Star GAMER-XMD\nServer running on http://localhost:${PORT}`);
});

module.exports = app;