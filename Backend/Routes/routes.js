import express from 'express';
import mongoose from 'mongoose';
import shoeModel from '../Databse/Model and Schema/ShoeSchema.js';

const route = express.Router();

const fetchdata =async (req,res)=>{
    const {title,company,color,category,price} = req.query
    const queryObj = {}
    if(title&&title!=='') queryObj.title={$regex:title,$options:'i'};
    if(company&&company!=='All Products'&&company!=='') queryObj.company={$regex:company,$options:'i'};
    if(color&&color!=='all'&&color!=='') queryObj.color={$regex:color,$options:'i'};
    if(category&&category!=='all'&&category!=='') queryObj.category={$regex:category,$options:'i'};
    if(price&&price!=='all'&&price!==''&&price.includes('-')){
        const minPrice = price.split('-')[0];       
        const maxPrice = price.split('-')[1];
        if(minPrice==='Over'){
            queryObj.newPrice={$gte:Number(maxPrice)}
        }
        else{
            queryObj.newPrice={$gte:Number(minPrice),$lte:Number(maxPrice)}
        }        
    };
    try {
        const response= await shoeModel.find(queryObj)
         res.status(200).json(response);
    } catch (error) {
        console.log(error)
         res.status(500).json({message:'error fetching the shoes',error:error});
    }
}
route.get('/',fetchdata)

export default route;