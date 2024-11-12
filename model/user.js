const { Sequelize } = require("sequelize");
const db = require("./index.js");

const User = db.define(
  "client_personal_info",
  {
    client_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    mbl_reg_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "mobile_registraion",
        key: "mbl_reg_id",
      },
    },
    mobile_no: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9]{10}$/, 
      },
    },

    first_name: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    middle_name: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    last_name: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    dob: {
      type: Sequelize.STRING(50),
    },
    email: {
      type: Sequelize.STRING(100),
    },
    gender: {
      type: Sequelize.STRING(15),
    },
    panNo: {
      type: Sequelize.STRING(15),
      unique: true,
    },
    aadharNo: {
      type: Sequelize.STRING(15),
      unique: true,
    },
    pincode: {
      type: Sequelize.INTEGER,
    },
    city_id: {
      type: Sequelize.INTEGER,
    },
    employement_type_id: {
      type: Sequelize.INTEGER,
    },
    income_annual: {
      type: Sequelize.STRING(30),
    },
    inc_rec_id: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    created_by: {
      type: Sequelize.STRING(50),
    },
    updated_by: {
      type: Sequelize.STRING(50),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
