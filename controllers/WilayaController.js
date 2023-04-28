const Wilaya = require('../models/wilaya');

exports.getAllWilayas = async (req, res) => {
  try {
    const wilayas = await Wilaya.getAll();
    res.json(wilayas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des wilayas.' });
  }
};

exports.getWilayaById = async (req, res) => {
  try {
    const { id } = req.params;
    const wilaya = await Wilaya.getById(id);
    res.json(wilaya);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la wilaya.' });
  }
};

exports.createWilaya = async (req, res) => {
  try {
    const { code, namefr, namear } = req.body;
    const wilaya = new Wilaya(code, namefr, namear);
    await wilaya.create();
    res.json(wilaya);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de la wilaya.' });
  }
};
