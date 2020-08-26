import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import accountController from '../src/controllers/account.controller';
const app = express();

const PORT = process.env.PORT | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.send("Ola API");
});


app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});


const loadFileAcctoun = async () => {
  const fileAccotuns = fs.readFileSync("./accounts.json");

  console.log(fileAccotuns.length);
  
};


loadFileAcctoun();