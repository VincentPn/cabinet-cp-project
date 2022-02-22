const situationRouter = require('express').Router();
const situationController = require('../controllers/situationController');

situationRouter.get("/situations", situationController.findAll);

situationRouter.post("/situation/new", situationController.create);

module.exports = situationRouter;