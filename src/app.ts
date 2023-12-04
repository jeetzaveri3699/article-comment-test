import express, { Request, Response, json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import environmentConfig from "./config/env.config";

/**
 * create server setup
 *
 * @returns {Express}
 */
const app = express();
app.use(cors());
app.use(morgan(environmentConfig.env));
app.use(json());
app.use(urlencoded({ extended: true }));

// api routes
app.use("/api", routes);

// route not-found error return
app.use((req: Request, res: Response) => {
  const apiResponse = {
    successful: false,
    message: "Route not found.",
  };
  return res.status(404).json(apiResponse);
});

export default app;
