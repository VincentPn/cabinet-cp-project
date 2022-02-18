const Router = require('express');

const router = Router();

const {
  authRoutes,
  utilisateurRoutes
} = require('./routes');

router.use(authRoutes);
router.use(utilisateurRoutes);

module.exports = router;