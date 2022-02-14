require("dotenv").config();
const { DB_HOST, DB_NAME, DB_PASS, DB_USER } = process.env;

module.exports = {
  development: {
    username: 'shop',
    password: 123,
    database: 'shop',
    host: 'localhost',
    dialect: "postgres",
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions:{
      "ssl":{
        "rejectUnauthorized":false
      }
    }
  },
};
