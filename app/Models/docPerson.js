const Sequelize = require('sequelize');
const db = require('../utils/database');
const User = require('./users');

const DocPerson = db.define('docPerson', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  }
});

DocPerson.belongsTo(User, {
  constraint: true,
  foreignKey: 'idUser',
});

module.exports = DocPerson;