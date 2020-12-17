const Sequelize = require('sequelize');
const { stagingDB } = require('./connection');

const db = new Sequelize(
  stagingDB.database,
  stagingDB.username,
  stagingDB.password, {
    host: stagingDB.host,
    dialect: stagingDB.dialect,
    dialectOptions: {
      ssl: {
        require: false, //
        rejectUnauthorized: false, //
      },
      keepAlive: true,
    },
    ssl: false, //
    port: stagingDB.port,
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    logging: false, //
  },
);

module.exports = {
  db,
};
