const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Enfant = sequelize.define('enfant', {
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
date_naissance: {
type: DataTypes.DATEONLY,
allowNull: true
},
sexe: {
type: DataTypes.STRING(20),
allowNull: true
}
}, {
timestamps: false,
tableName: 'enfant'
});

module.exports = Enfant;