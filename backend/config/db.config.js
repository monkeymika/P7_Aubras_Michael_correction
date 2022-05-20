/**************************************/
/******** Import des modules *********/
const dotenv = require("dotenv");
dotenv.config()

module.exports =
  {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_PORT,
    "dialect": "mysql"
  }