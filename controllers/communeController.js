const Commune = require('../models/commune');

// Récupérer toutes les communes
exports.getAllCommunes = async (req, res) => {
  try {
    const communes = await Commune.getAll();
    res.json(communes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
};

// Récupérer une commune par son ID
exports.getCommuneById = async (req, res) => {
  const id = req.params.id;
  try {
    const commune = await Commune.getById(id);
    if (!commune) {
      return res.status(404).send('Commune non trouvée');
    }
    res.json(commune);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
};

// Ajouter une nouvelle commune
exports.addCommune = async (req, res) => {
  const { namefr, namear, wilayacode } = req.body;
  if (!namefr || !namear || !wilayacode) {
    return res.status(400).send('Les champs namefr, namear et wilayacode sont obligatoires');
  }
  try {
    const newCommune = await Commune.create(namefr, namear, wilayacode);
    res.json(newCommune);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
};

// Mettre à jour une commune existante
exports.updateCommune = async (req, res) => {
  const id = req.params.id;
  const { namefr, namear, wilayacode } = req.body;
  if (!namefr && !namear && !wilayacode) {
    return res.status(400).send('Au moins un des champs namefr, namear ou wilayacode doit être fourni');
  }
  try {
    const updatedCommune = await Commune.update(id, { namefr, namear, wilayacode });
    if (!updatedCommune) {
      return res.status(404).send('Commune non trouvée');
    }
    res.json(updatedCommune);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
};

// Supprimer une commune existante
exports.deleteCommune = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCommune = await Commune.delete(id);
    if (!deletedCommune) {
      return res.status(404).send('Commune non trouvée');
    }
    res.json(deletedCommune);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
};
