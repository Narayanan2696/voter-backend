const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const xss = require('xss-clean');
const cors = require('cors');
require('custom-env').env(true);

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

let dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbUrl, dbOptions);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));

// middleware
//Santizing data against XSS attacks
app.use(xss());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.get('/', (req, res) => {
  res.json({success: "success"})
})
const routes = require('./routes');
const router = express.Router();
app.use('/api', routes(router));

db.once('open', () => {
  console.log('********** Successfully connected to database @ ', dbUrl);
  app.listen(port, () => {
    console.log('********** Express server started');
  });
});