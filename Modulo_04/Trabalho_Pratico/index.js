import express from "express";
import bodyParser from "body-parser";
import accountRoutes from "./src/routes/account.routes";
import seed from "./src/database/seed";
import { responseEnhancer } from 'express-response-formatter';

const app = express();

const PORT = process.env.PORT | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(responseEnhancer());

// app.use("/", (req, res) => {
//   res.send("Ola API");
// });
app.use("/", (req, res, next) => {
  console.log(
    `${req.method} - ${req.protocol}//${req.baseUrl}:${PORT}/${req.url}`
  );

  //res.send('Ola');

  next();
});
app.use("/account", accountRoutes);

app.use("/", (error, req, res, next) => {
  console.error(error.message);
  res.status(error.status);
  res.send({ status: 'error', message: error.message});
});

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});

seed.exec();
