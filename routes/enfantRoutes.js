const express = require('express');
const router = express.Router();
const enfantController = require('../controllers/enfantController');

// Récupérer la liste des enfants
router.get('/', enfantController.getEnfants);

// Récupérer un enfant par son id
router.get('/:id', enfantController.getEnfantById);

// Ajouter un enfant
router.post('/', enfantController.createEnfant);

// Modifier un enfant
router.put('/:id', enfantController.updateEnfant);

// Supprimer un enfant
router.delete('/:id', enfantController.deleteEnfant);

module.exports = router;