const db = require('../utils/db');

// GET all signalement motifs
exports.getAllSignalementMotifs = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM signalementmotif');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// GET a specific signalement motif by id
exports.getSignalementMotifById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM signalementmotif WHERE code = $1', [id]);
    if (result.rowCount === 0) {
      res.status(404).send('Signalement motif not found');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// CREATE a new signalement motif
exports.createSignalementMotif = async (req, res) => {
  try {
    const { designationfr, designationar, description } = req.body;
    const result = await db.query('INSERT INTO signalementmotif (designationfr, designationar, description) VALUES ($1, $2, $3) RETURNING *', [designationfr, designationar, description]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// UPDATE an existing signalement motif by id
exports.updateSignalementMotif = async (req, res) => {
  try {
    const { id } = req.params;
    const { designationfr, designationar, description } = req.body;
    const result = await db.query('UPDATE signalementmotif SET designationfr = $1, designationar = $2, description = $3 WHERE code = $4 RETURNING *', [designationfr, designationar, description, id]);
    if (result.rowCount === 0) {
      res.status(404).send('Signalement motif not found');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// DELETE a specific signalement motif by id
exports.deleteSignalementMotif = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM signalementmotif WHERE code = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      res.status(404).send('Signalement motif not found');
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
