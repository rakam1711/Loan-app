const { Sequelize } = require("sequelize");
const db = require("./index.js");

const Otp = db.define("tblOTP", {
  otpid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  mobile_no: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: /^[0-9]{10}$/, // Regex to validate 10-digit mobile number
    },
  },
  otp: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  expire_time: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  wrong_attempt: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Otp;
