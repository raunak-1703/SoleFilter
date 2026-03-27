import mongoose from "mongoose";

const connectdb = async(DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL)
        console.log('Databse Connected')
    } catch (error) {
        console.log('Error connecting',error)
    }
}
export default connectdb;