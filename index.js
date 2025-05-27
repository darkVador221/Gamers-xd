const express = require('express');
const app = express();
const __path = process.cwd();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/server', require('./qr'));
app.use('/code', require('./pair'));

// Serve static files
app.get('/pair', (req, res) => res.sendFile(__path + '/pair.html'));
app.get('/qr', (req, res) => res.sendFile(__path + '/qr.html'));
app.get('/', (req, res) => res.sendFile(__path + '/main.html'));

app.listen(PORT, () => {
  console.log(`✅ Server running on port: ${PORT}`);
});

module.exports = app;