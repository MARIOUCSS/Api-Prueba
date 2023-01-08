const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Ordershema = new Schema({
    created: {
        type: Date,
        default: Date.now,
    },
    customer: {
        type: Schema.ObjectId,
        ref: 'customer',
    },
    Products: [{
        product: {
            type: Schema.ObjectId,
            ref: 'Products'
        },
        unitPrice:{
            type:Number
        },
        quantity:{
            type:Number,
        },
        amount:{
            type:Number,
        }
    }
    ],
    totalAmount:{
        type:Number,
    }
});


module.exports=mongoose.model('Orders',Ordershema);