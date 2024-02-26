import express from "express";
import bodyParser from "body-parser";

import router from "./routes";
import Database from "./config/database";

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.use((req: any, res: any, next: any) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

Database.db.$connect;
