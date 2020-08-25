const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const ProductSchema=new Schema({
    ProductName:{
        type:String,
        required:[true,'This is a required field']
    },
    Description:{
          type:String
    },
    Price:{
        type:Number
    },
    Quantity:{
        type:Number,
        default:false
    }
})

const CategorySchema=new Schema({
Category:[ProductSchema]
    
})

const Category=mongoose.model('category',CategorySchema);
module.exports=Category;


