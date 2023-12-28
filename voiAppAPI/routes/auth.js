const authController = require("../controller/authController");
const middlewareController = require("../controller/middlewareController");

const router = require("express").Router();

//register
router.post("/register", authController.register);
//login
router.post("/login", authController.login);
//logout
router.post("/logout", middlewareController.verifyToken, authController.logout);
module.exports = router;
