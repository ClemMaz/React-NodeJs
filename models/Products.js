const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    weight: Number
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product