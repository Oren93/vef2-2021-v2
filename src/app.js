import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const Router = express.Router();
const {
  PORT: port = 3000,
} = process.env;

const app = express();

// TODO setja upp rest af virkni!
app.use(express.urlencoded({ extended: true }));

app.set('views', '../views');
app.set('view engine', 'ejs');
app.use(express.static('../public'));


Router.get("/", (req, res) => {
  console.log("hi");
    res.render("index", { document: "document"});
});

// Verðum að setja bara *port* svo virki á heroku
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});

/** const express = require('express');
const path = require('path');


const app = express();

app.use(express.static('styles'));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
  
 
  
  app.listen(4000, () => console.log('Example app listening on port 4000!'));
*/