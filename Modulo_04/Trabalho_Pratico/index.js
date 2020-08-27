import express from "express";
import bodyParser from "body-parser";
import accountRoutes from './src/routes/account.routes'
import seed from './src/database/seed';

const app = express();

const PORT = process.env.PORT | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", (req, res) => {
//   res.send("Ola API");
// });
app.use('/', (req, res, next) => {
  console.log(`${req.url}`);

  //res.send('Ola');

  next();
})
app.use('/account', accountRoutes);

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});


seed.exec();