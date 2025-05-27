const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;

// Configuration des middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes dynamiques
app.use('/server', require('./qr'));
app.use('/code', require('./pair'));

// Fichiers statiques avec gestion d'erreur
const serveStatic = (file) => (req, res) => {
  try {
    res.sendFile(path.join(__dirname, file));
  } catch (error) {
    res.status(500).send('Error loading page');
  }
};

app.get('/pair', serveStatic('pair.html'));
app.get('/qr', serveStatic('qr.html'));
app.get('/', serveStatic('main.html'));

app.listen(PORT, () => {
  console.log(`🚀 Server ready on port ${PORT}`);
});

module.exports = app;