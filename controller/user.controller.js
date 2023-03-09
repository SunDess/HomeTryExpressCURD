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

const updateUser = async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOneAndUpdate({_id: id}, req.body);
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

}

const destroyUser = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await User.findOneAndDelete(id);
        res.status(204).json();
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllUser,
    storeUser,
    getUserById,
    updateUser,
    destroyUser
}