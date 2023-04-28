const express = require('express');
const router = express.Router();

const communeController = require('../controllers/communeController');

// GET all communes
router.get('/', communeController.getAllCommunes);

// GET a specific commune by id
router.get('/:id', communeController.getCommuneById);

// CREATE a new commune
router.post('/', communeController.createCommune);

// UPDATE an existing commune by id
router.put('/:id', communeController.updateCommune);

// DELETE a specific commune by id
router.delete('/:id', communeController.deleteCommune);

module.exports = router;
