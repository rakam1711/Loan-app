const { Sequelize } = require("sequelize");
const db = require("./index.js");

const aadharRegister = db.define(
  "client_aadhar",
  {
    cltaadhar_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // mbl_reg_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "mobile_registraion",
    //     key: "mbl_reg_id",
    //   },
    // },
    // user_reg_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "client_personal_info",
    //     key: "client_id",
    //   },
    // },
    aaddharNo: {
      type: Sequelize.STRING(15),
      unique: true,
    },
    aaddharName: {
      type: Sequelize.STRING(15),
      unique: true,
    },
    aaddhar_varified: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    // created_by: {
    //   type: Sequelize.STRING(50),
    // },

    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = aadharRegister;
