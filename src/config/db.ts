import { Sequelize } from "sequelize-typescript";
import environmentConfig from "./env.config";
import { Article } from "../models/article";
import { Comment } from "../models/comment";

export const connection = new Sequelize({
  dialect: "mysql",
  host: environmentConfig.db.DB_HOST,
  username: environmentConfig.db.DB_USERNAME,
  password: environmentConfig.db.DB_PASSWORD,
  database: environmentConfig.db.DB_NAME,
  logging: false,
  models: [Article, Comment],
});

async function connectDB() {
  try {
    await connection.sync();
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error while connecting to DB :::::: ", error);
  }
}

export default connectDB;
