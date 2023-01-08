const mongoose = require('mongoose');

const ShemaProducts = new mongoose.Schema({
    sku: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true,
    },
    name: {
        type: String,
        trim: true,
    },
    descripcion: {
        type: String,
        trim: true,
    },
    image:{
        type:String,
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
        default: 0,

    },
    available: {
        type: Boolean,
        default: true,

    },

});

const Products = mongoose.model('Products', ShemaProducts)
module.exports = Products;