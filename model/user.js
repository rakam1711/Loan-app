const { Sequelize } = require("sequelize");
const db = require("./index.js");

const User = db.define("tbluser", {
  userid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  firstname: {
    type: Sequelize.STRING(50),
  },

  lastname: {
    type: Sequelize.STRING(50),
  },
  panNo: {
    type: Sequelize.STRING(50),
  },
  dateOfBirth: {
    type: Sequelize.STRING(50),
  },
  mobile_no: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/, // Regex to validate 10-digit mobile number
    },
  },
  gender: {
    type: Sequelize.STRING(15),
  },
  email: {
    type: Sequelize.STRING(100),
  },
  status: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = User;
