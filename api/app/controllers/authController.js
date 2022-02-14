const {Utilisateur} = require('../models/Utilisateur');
const bcrypt = require('bcrypt');

const authController = {
  signin: async (request, response) => {
    try {
      const {email, password} = request.body;

      const utilisateur = await Utilisateur.findByEmail(email);
      if(!utilisateur) return response.status(404).end("auth error");

      const compare = await bcrypt.compare(password, utilisateur.password);
      if(!compare) return response.status(404).end("auth error");

      response.json({utilisateur});

    } catch (error) {
      response.status(500).end(error.message);
    }
  },

  signup: async (request, response) => {
    try {
      const {email, password} = request.body;

      const registeredUser = await Utilisateur.findByEmail(email);
      if(registeredUser) return response.status(401).end("already registered");

      const salt = await bcrypt.genSalt(10);
      request.body.password = await bcrypt.hash(password, salt);

      delete request.body.passwordConfirm;

      const {id} = await new User(request.body).create();
      if(!id) throw new Error("user registration failed");

      response.status(201).send("registration success");
    } catch (error) {
      response.status(500).end(error.message);
    }
  }
}

module.exports = authController;