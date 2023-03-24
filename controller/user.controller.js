// const mongoose = require("mongoose");
// const UserModel = mongoose.model("user");

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const storeUser = async (req, res) => {
  try {
    const { name, lastName, age, phone, email, password } = req.body;

    const hashpass = await bcrypt.hash(password, 10);

    const isUser = await User.findOne({ email: email });

    if (!isUser){
      const user = await User.create({
        name,
        lastName,
        age,
        phone,
        email,    
        password: hashpass,
      });
  
      res
        .status(201)
        .json({ "User name": user.name, _id: user.id, email: user.email });
    }
    else {
      res.status(400).json({ message: "User already exists" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndUpdate({ _id: id }, req.body);
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const destroyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findOneAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
       return res.status(401).json({
      message: "Invalid credentials",
    });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1m" }
    );

    return res.status(200).json({
      accessToken: token,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUser,
  storeUser,
  getUserById,
  updateUser,
  destroyUser,
  login,
};
