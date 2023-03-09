const express = require('express');

const router = express.Router();

const { 
    storeProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    destroyProduct 
} = require('../controller/products.controller');

const {
    getAllUser,
    storeUser,
    getUserById,
    updateUser,
    destroyUser
} = require('../controller/user.controller');

router.post('/products', storeProduct)
router.get('/products', getAllProducts)
router.get('/products/:id', getProductById)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', destroyProduct)

router.post('/users', storeUser)
router.get('/users', getAllUser)
router.get('/users/:id', getUserById)
router.put('/users/:id', updateUser)
router.delete('/users/:id', destroyUser)

module.exports = router;