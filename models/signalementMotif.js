const { Model } = require('sequelize');
const sequelize = require('../utils/db');

class SignalementMotif extends Model {}

SignalementMotif.init({
  code: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  designationfr: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  designationar: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'SignalementMotif',
  tableName: 'signalementmotif',
  timestamps: false,
});

module.exports = SignalementMotif;