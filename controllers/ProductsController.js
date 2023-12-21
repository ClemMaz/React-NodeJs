const Product = require('../models/Products')

const createProduct = (req, res) => {
    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.weight = req.body.weight
    product.category = req.body.category
    product.save()

    res.json(product)
}

const getProducts = (req, res) => {
    Product.find().then(data => {
        res.json(data)
    })
}

module.exports = {
    createProduct,
    getProducts
}