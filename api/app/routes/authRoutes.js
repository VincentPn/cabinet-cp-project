const authRouter = require('express').Router();

authRouter.post("/signin", authController.signin);
authRouter.post("/signup", authController.signup);

module.exports = authRouter;