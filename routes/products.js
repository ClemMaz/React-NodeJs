const express = require('express')
const router = express.Router()
const {
    createProduct,
    getProducts
} = require('../controllers/ProductsController')

router.post('/products', createProduct)
router.get('/products', getProducts)


module.exports = router