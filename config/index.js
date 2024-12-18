const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  APP_PORT,
  DEBUG_MODE,
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  TOKENEXPIN,

  DB_POST,
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME,
} = process.env;
