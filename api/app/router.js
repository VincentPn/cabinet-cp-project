const Router = require('express');

const router = Router();

const {
  authRoutes
} = require('./routes');

router.use(authRoutes);

module.exports = router;