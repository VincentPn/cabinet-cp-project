const utilisateurRouter = require('express').Router();
const utilisateurController = require('../controllers/utilisateurController');

utilisateurRouter.get("/utilisateurs", utilisateurController.findAll);
utilisateurRouter.get("/utilisateur", utilisateurController.findById);

utilisateurRouter.patch("/utilisateur", utilisateurController.update);

module.exports = utilisateurRouter;