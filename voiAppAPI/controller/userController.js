const User = require("../models/user")

const userController ={
    //get a user
    getOne : async({params}, res) => {
        try {
            const result = await User.findOne({_id: params.id})
            if(result == null ){
                res.status(400).send({message: "User not exist"})
            }
            res.status(result ? 200 : 400).json(result);
        }catch(error){
            res.status(400).json(error)
        }
    },
    //update a user
    update: async(req,res) => {
        const {fullname, address, email, password} = req.body;
        if(!fullname.trim()){
            res.status(400).json("Missing name field")
            return;
        }
        if(!address.trim()){
            res.status(400).json("Missing address field")
            return;
        }
        if(!email.trim()){
            res.status(400).json("Missing email field")
        }
        const result = await User.findOne({_id: req.params.id});
        if(result == null){
            res.status(400).json("User not exist or has been deleteced");
            return;
        }
        try {
            const updatedUser = await User.findOneAndUpdate(
              { _id: req.params.id },
              req.body,
              { new: true }
            );
            res.status(200).json(updatedUser);
          } catch (error) {
            res.status(400).json(error);
          }
    },
}

module.exports = userController;
