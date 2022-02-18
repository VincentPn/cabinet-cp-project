const Router = require('express');

const router = Router();

const {
  authRoutes,
  utilisateurRoutes,
  situationRoutes
} = require('./routes');

router.use(authRoutes);
router.use(utilisateurRoutes);
router.use(situationRoutes);

module.exports = router;