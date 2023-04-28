const db = require("../utils/db");

// Récupérer la liste des citoyens
exports.getCitoyens = (req, res) => {
  db.query("SELECT * FROM citoyen", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur s'est produite." });
    } else {
      res.status(200).json(result.rows);
    }
  });
};

// Récupérer un citoyen par son id
exports.getCitoyenById = (req, res) => {
  const citoyenId = req.params.id;
  db.query("SELECT * FROM citoyen WHERE id = $1", [citoyenId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur s'est produite." });
    } else if (result.rows.length === 0) {
      res.status(404).json({ message: "Citoyen introuvable." });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
};

// Ajouter un citoyen
exports.createCitoyen = (req, res) => {
  const { nom, prenom, adresse, tel, sexe } = req.body;
  db.query(
    "INSERT INTO citoyen (nom, prenom, adresse, tel, sexe, inscriptiondate) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *",
    [nom, prenom, adresse, tel, sexe],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite." });
      } else {
        res.status(201).json(result.rows[0]);
      }
    }
  );
};

// Modifier un citoyen
exports.updateCitoyen = (req, res) => {
  const citoyenId = req.params.id;
  const { nom, prenom, adresse, tel, sexe } = req.body;
  db.query(
    "UPDATE citoyen SET nom = $1, prenom = $2, adresse = $3, tel = $4, sexe = $5 WHERE id = $6 RETURNING *",
    [nom, prenom, adresse, tel, sexe, citoyenId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite." });
      } else if (result.rows.length === 0) {
        res.status(404).json({ message: "Citoyen introuvable." });
      } else {
        res.status(200).json(result.rows[0]);
      }
    }
  );
};

// Supprimer un citoyen
exports.deleteCitoyen = (req, res) => {
    const citoyenId = req.params.id;
    db.query("DELETE FROM citoyen WHERE id = $1 RETURNING *", [citoyenId], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite." });
      } else if (result.rows.length === 0) {
        res.status(404).json({ message: "Citoyen introuvable." });
      } else {
        res.status(200).json({ message: "Citoyen supprimé avec succès.", citoyen: result.rows[0] });
      }
    });
  };
  
