const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('nominee', {
  imdbID: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  Title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Year: {
    type: Sequelize.DATE
  },
  Poster: {
      type: Sequelize.TEXT
  }
});
