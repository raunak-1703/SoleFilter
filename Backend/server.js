import express from 'express'
import dotenv from 'dotenv'
import connectdb from './Databse/connectdb.js';
import insertData from './Databse/Model and Schema/shoeModel.js';
import route from './Routes/routes.js';
import cors from 'cors'

dotenv.config();
const app = express()
const DATABASE_URL = process.env.DATABASE_URL;
app.use(cors());
app.use('/shoe',route)

connectdb(DATABASE_URL);
// insertData();
app.listen(8000,()=>{
    console.log("Server up!")
})