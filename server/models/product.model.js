const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "title is required"]
    },
    price:{
        type: Number,
        required: [true, 'Price is required']
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
        minlength:[4, 'Description must be at least 4 characters long'],
    },
}, {timestamps:true});

module.export = mongoose.model('Product', ProductSchema);