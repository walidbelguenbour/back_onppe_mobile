const express = require('express');
const router = express.Router();
const citoyenController = require('../controllers/citoyenController');

// Liste des routes pour les opérations sur les citoyens
router.get('/', citoyenController.getAllCitoyens);
router.get('/:id', citoyenController.getCitoyenById);
router.post('/', citoyenController.createCitoyen);
router.put('/:id', citoyenController.updateCitoyen);
router.delete('/:id', citoyenController.deleteCitoyen);

module.exports = router;