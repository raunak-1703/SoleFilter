import shoeModel from './ShoeSchema.js'
import data from '../data.js'
import mongoose from "mongoose"

const insertData =async ()=>{
    try {
        const result = await shoeModel.insertMany(data);
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}
export default insertData;
