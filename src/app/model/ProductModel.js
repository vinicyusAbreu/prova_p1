const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ProductSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    name: {
        type: String,
        required:true,
        trim:true,
    },
    price: {
        type: String,
        required:true,
        trim:true,
        minlength: 2,
        maxlength: 50,
    },
    category_id: {
        type: String,
        required:true,
        trim:true,
    },
    subcategory: {
        type: String,
        required:true,
        trim:true,
    },
},
{
    versionKey: false,
}
);

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;