// Import des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const enfantController = require('./controllers/enfantController');
const enfantRoutes = require('./routes/enfantRoutes');

// Import des fichiers de configuration
const db = require('./utils/db');

// Création de l'application Express
const app = express();

// Configuration des middlewares
app.use(bodyParser.json());
app.use(cors());

// Configuration des routes
app.use('/enfants', enfantRoutes);
app.get('/enfants/:id', enfantController.getEnfantById);
// ... ajouter les autres routes ici

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur s\'est produite sur le serveur');
});

// Création d'une instance Sequelize
const sequelize = new Sequelize('DB_Security', 'openpg', 'openpgpwd', {
    host: 'localhost',
    dialect: 'postgres',
});

// Export de l'instance Sequelize
module.exports = sequelize;

// Lancement du serveur
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});


