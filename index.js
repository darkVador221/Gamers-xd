const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;

require('events').EventEmitter.defaultMaxListeners = 500;

const server = require('./qr');
const code = require('./pair');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/server', server);
app.use('/code', code);
app.use('/pair', (req, res) => {
  res.sendFile(path.join(__dirname, 'pair.html'));
});
app.use('/qr', (req, res) => {
  res.sendFile(path.join(__dirname, 'qr.html'));
});
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

app.listen(PORT, () => {
  console.log(`\nDon't Forget To Give Star GAMER-XMD\n\nServer running on http://localhost:${PORT}`);
});

module.exports = app;