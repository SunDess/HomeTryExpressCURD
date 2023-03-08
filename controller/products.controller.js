const mongoose = require('mongoose');
const Product = require('../models/productModels')

const productSchema = mongoose.model('Product');


const storeProduct = async (req,res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        req.status().json({message: error.message})
    }
};


const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Product.findOneAndUpdate( {_id: id} ,req.body);
        const updatedResult = await Product.findById(id);
        res.status(200).json(updatedResult);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const destroyProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Product.findByIdAndDelete(id);
        res.status(204).json({deleted: result});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

}


module.exports = {
    storeProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    destroyProduct
};

// app.get('/products', async(req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products); 
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// })

// app.get('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product); 
//     }
    
// })