import express from "express";
import bodyParser from "body-parser";

import router from "./routes";
import Database from "./config/database";

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

Database.db.$connect;
