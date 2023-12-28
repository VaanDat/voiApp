const drinkController = require("../controller/drinkController");
const middlewareController = require("../controller/middlewareController");

const router = require("express").Router();

//get all drink
router.get("/", middlewareController.verifyToken, drinkController.getAll);
//create a drink
router.post("/",middlewareController.verifyToken, drinkController.create);
//get a drink
router.get("/:id",middlewareController.verifyToken, drinkController.getOne);
//update a drink
router.put("/:id",middlewareController.verifyToken, drinkController.update);
//delete a drink
router.delete("/:id",middlewareController.verifyToken, drinkController.delete);
module.exports = router;
