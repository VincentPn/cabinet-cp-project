//Configuration de dotenv pour utiliser les variables d'environnement
require('dotenv').config();

//Import de l'élément Client du module pg
const { Client } = require('pg');

//Création d'un nouveau client avec les informations de connexion à la BDD Postgres
const client = new Client(process.env.DB_URI);

//Connexion du client à la BDD
client.connect();

client.query('SELECT * FROM "situation"', (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res.rows)
  }
})

module.export = client;
