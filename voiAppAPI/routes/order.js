const orderController = require("../controller/orderController");
const middlewareController = require("../controller/middlewareController");

const router = require("express").Router();
//create an order
router.post("/", middlewareController.verifyToken, orderController.create);

module.exports = router;
