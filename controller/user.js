
import { userScheme } from "../models/user.js";
import mongoose from "mongoose";

const User = mongoose.model("User", userScheme);


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        
    } catch (error) {
      res.status(500).json({ message: error.message });
        
    }
}

const getOneUser = async ( req,res)=>{
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
    
  }
}

const deleteUser = async (req, res) => {
  try {

    const user = await User.findByIdAndDelete(req.params.userId);
    res.json({ message: "User deleted successfully", user });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { getAllUsers, getOneUser, deleteUser, createUser };
