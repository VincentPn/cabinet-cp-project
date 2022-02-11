require('dotenv').config();

//Import du module Express
const express = require('express');

//Initialisation du serveur web Express
const app = express();

app.listen(() => {
  console.log(`App listening on port : ${process.env.PORT}`);
});
