const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

//@getAllUser
//get
//@acess public

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json("Error", err);
  }
});

const addUser = asyncHandler(async (req, res) => {
  try {
    const username = req.body.username;
    const newUser = new User({ username });
    newUser.save();
    res.status(201).json("New User added");
  } catch (err) {
    res.status(400).json("Error", err);
  }
});

module.exports = { getUsers, addUser };
