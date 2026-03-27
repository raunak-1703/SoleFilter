import mongoose from "mongoose";
const shoeSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    reviews:{
        type:String,
        required:true,
    },
    prevPrice:{
        type:String,
        required:true,
    },
    newPrice:{
        type:Number,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
})

const shoeModel = mongoose.model('Shoe Store',shoeSchema);
export default shoeModel
