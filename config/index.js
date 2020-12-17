require('dotenv').config();

const config = {
  port: 2020,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'postgres',
  },
  natsIP: process.env.NATS_IP,
};

module.exports = config;
