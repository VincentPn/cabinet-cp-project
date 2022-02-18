const Utilisateur = require('../models/Utilisateur.js');
const bcrypt = require('bcrypt');
 
const authController = {
  signin: async (request, response) => {
    try {
      const {email, password} = request.body;

      const utilisateur = await Utilisateur.findByEmail(email);
      if(!utilisateur) return response.status(404).end("auth error 1");

      const compare = await bcrypt.compare(password, utilisateur.password);
      if(!compare) return response.status(404).end("auth error 2");

      response.json({utilisateur});

    } catch (error) {
      response.status(500).end(error.message);
    }
  },

  signup: async (request, response) => {
    try {
      const {email, password} = request.body;

      const registeredUtilisateur = await Utilisateur.findByEmail(email);
      if(registeredUtilisateur) return response.status(401).end("already registered");

      const salt = await bcrypt.genSalt(10);
      request.body.password = await bcrypt.hash(password, salt);

      delete request.body.passwordConfirm;

      const id = await new Utilisateur(request.body).create();
      console.log("id: ", id);
      if(!id) throw new Error("user registration failed");

      response.status(201).send("registration success");
    } catch (error) {
      console.log("Erreur dans le controller:", error);
      response.status(500).end(error.message);
    }
  }
}

module.exports = authController;