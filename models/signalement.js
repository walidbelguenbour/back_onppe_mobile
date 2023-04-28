const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

class Signalement extends Model {}

Signalement.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  citoyen_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'citoyen',
      key: 'id'
    }
  },
  motif_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'motif',
      key: 'id'
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'signalement'
});

module.exports = Signalement;
