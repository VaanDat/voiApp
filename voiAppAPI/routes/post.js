const postController = require("../controller/postController");
const middlewareController = require("../controller/middlewareController");

const router = require("express").Router();

//create a post
router.post("/", middlewareController.verifyToken, postController.create);

module.exports = router;
