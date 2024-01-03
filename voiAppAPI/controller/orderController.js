const Order = require("../models/order");

const orderController = {
  //create a order
  create: async (req, res) => {
    try {
      const { user, drinks, totalPrice } = req.body;

      const newOrder = new Order({
        user,
        drinks,
        totalPrice,
      });

      const order = await newOrder.save();
      res.json(order);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = orderController;