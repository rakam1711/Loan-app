const { Sequelize } = require("sequelize");
const db = require("./index.js");

const mobileRegister = db.define(
  "mobile_registraion",
  {
    mbl_reg_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mobile_prefix: {
      type: Sequelize.STRING(5), // +91 for India
      allowNull: false,
    },

    mobile_no: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9]{10}$/, // Regex to validate 10-digit mobile number
      },
    },
    device_ip: {
      type: Sequelize.STRING(16),
      allowNull: true,
    },
    is_vpn: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    otp: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    outside_india: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    dedup_matched: {
      type: Sequelize.BOOLEAN,
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
  },
  {
    timestamps: true,
  }
);

module.exports = mobileRegister;
