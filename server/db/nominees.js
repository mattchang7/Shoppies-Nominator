const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('nominee', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  year: {
    type: Sequelize.DATE
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
      type: Sequelize.TEXT
  },
  posterUrl: {
      type: Sequelize.TEXT
  }
});
