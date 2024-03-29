const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./model/db');
const professionalRoutes = require('./routes/index');
require('dotenv').config();




const {connectToDb, getDb} = require('./model/db')

const app = express();
const port = process.env.PORT || 8080;





app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use(professionalRoutes);

mongodb.connectToDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
 
