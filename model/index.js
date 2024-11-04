const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.signups = require("./signup.model.js")(sequelize, Sequelize);

// db.otps = require("./otp.js")(sequelize, Sequelize);

// =====================Master Relation========================

// db.masterKeys.hasMany(db.masterDatas,{ foreignKey: 'masterkey' });
// db.masterDatas.belongsTo(db.masterKeys,{ foreignKey: 'masterkey' });

module.exports = sequelize;
