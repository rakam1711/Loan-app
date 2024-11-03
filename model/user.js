const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Signup = sequelize.define(
    "user",
    {
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
      gender: {
        type: Sequelize.STRING(15),
      },
      email: {
        type: Sequelize.STRING(100),
      },
      number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        validate: {
          is: /^[0-9]{10}$/, // Ensures it’s a 10-digit number
        },
      },
      OTP: {
        type: Sequelize.INTEGER,
      },
      OTPStatus: {
        type: Sequelize.STRING(20),
      },
      OTPExpiration: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        get() {
          return this.getDataValue("OTPExpiration")?.getTime();
        },
        set(value) {
          this.setDataValue("OTPExpiration", new Date(value));
        },
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
  );
  return Signup;
};
