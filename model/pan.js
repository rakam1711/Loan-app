const { Sequelize } = require("sequelize");
const db = require("./index.js");

const panRegister = db.define(
  "client_pan",
  {
    cltpan_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mbl_reg_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    user_reg_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    panNo: {
      type: Sequelize.STRING(15),
      unique: true,
    },
    panName: {
      type: Sequelize.STRING(15),
      unique: true,
    },
    pan_varified: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    created_by: {
      type: Sequelize.STRING(50),
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

module.exports = panRegister;
