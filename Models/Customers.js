const mongoose = require('mongoose');

const ShemaCustomer = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        triem: true,
    },
});

const Customer=mongoose.model('customer',ShemaCustomer);
module.exports=Customer;