const rootRooter = require('express').Router();

const {
  authRoutes
} = require('./routes');

rootRooter.use(authRoutes)

module.exports = rootRooter;