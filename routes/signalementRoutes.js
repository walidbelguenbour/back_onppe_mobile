const express = require("express");
const router = express.Router();
const signalementController = require("../controllers/signalementController");

// Récupérer tous les signalements
router.get("/", signalementController.getAllSignalements);

// Récupérer un signalement par son ID
router.get("/:id", signalementController.getSignalementById);

// Créer un nouveau signalement
router.post("/", signalementController.createSignalement);

// Mettre à jour un signalement
router.put("/:id", signalementController.updateSignalement);

// Supprimer un signalement
router.delete("/:id", signalementController.deleteSignalement);

module.exports = router;
