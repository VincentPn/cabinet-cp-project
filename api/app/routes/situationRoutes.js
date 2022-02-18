const situationRouter = require('express').Router();
const situationController = require('../controllers/situationController');

situationRouter.get("/situations", situationController.findAll);

module.exports = situationRouter;