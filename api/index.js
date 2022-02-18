require('dotenv').config();

//Import du module Express
const express = require('express');

//Initialisation du serveur web Express
const app = express();

// Import du router
const router = require('./app/router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port : ${process.env.PORT}`);
});
