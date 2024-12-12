import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name:{
        type: 'string',
        required: [true,'Please enter a name']
    },
    quantity: {
        type:Number,
        required: [true,'Please enter a quantity'],
        default:0
    },
    price:{
        type:Number,
        required: [true,'Please enter a price'],
        default:0
    },
    image:{
        type: String,
        required:false,
    },
},
{
    timestamps: true
})

const Product= mongoose.model('Products',ProductSchema);
 
export default Product;