import express from 'express';
import routes from './src/routes';

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());

// logger
app.all('/', (req, res, next) => {
  console.log(
    req.method + ' : ' + req.protocol + '://' + req.hostname + `:${PORT}`
  );
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Running api on port : http://localhost:${PORT}`);
});
