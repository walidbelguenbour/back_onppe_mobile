const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Wilaya = require('./wilaya');

const Commune = sequelize.define('commune', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  namefr: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  namear: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  wilayacode: {
    type: DataTypes.STRING(2),
    allowNull: false,
    references: {
      model: Wilaya,
      key: 'code',
    },
  },
});

module.exports = Commune;
