const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OTP = sequelize.define(
  "OTP",
  {
    number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[0-9]{10}$/,
      },
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    expire_time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wrong_attempt: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "otps",
    timestamps: true,
  }
);

module.exports = OTP;
