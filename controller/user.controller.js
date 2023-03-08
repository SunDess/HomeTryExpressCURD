const mongoose = require('mongoose');

const User = require('../models/userModel');

const UserSchema = mongoose.model('User');

const storeUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(200).json(user);
};


const getAllUser = async (req,res) => {
    const users = await User.find({});
    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user)
}

module.exports = {
    getAllUser,
    storeUser,
    getUserById
}