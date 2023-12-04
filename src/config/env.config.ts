import dotenv from 'dotenv';

dotenv.config();

const environmentConfig = Object.freeze({
  env: process.env.NODE_ENV || "dev",
  name: process.env.APP_NAME,
  port: process.env.APP_PORT,
  db: {
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  }
});

export default environmentConfig;
