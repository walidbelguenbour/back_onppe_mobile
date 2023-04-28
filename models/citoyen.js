const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Citoyen = sequelize.define('citoyen', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  prenom: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  adresse: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  tel: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  sexe: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  inscriptiondate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'citoyen'
});

module.exports = Citoyen;
