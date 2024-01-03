const userController = require("../controller/userController")
const middlewareController = require("../controller/middlewareController")

const router = require("express").Router();

//update user
router.put("/:id",middlewareController.verifyToken, userController.update);
//get a user
router.get("/:id",middlewareController.verifyToken, userController.getOne);

module.exports = router;