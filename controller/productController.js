
import { Product } from "../model/productModel.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"



export const create =async (req, res) =>{

    try {
            const newData = new Product(req.body)
            const saveData = await newData.save();
            if (saveData) {
                return res.status(201).json({ result: saveData, message: 'successfully inserted user into db' });
            }
       

    }
    catch (error) {
        return res.status(404).json({ message: error.message || 'error' });
    }
}



export const getAll = async (req, res) => {
    try {
        const getAll = await Product.find()
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}
export const getListById = async (req, res) => {
    try {
        const getAll = await Product.find({category_id:req.params.id})
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}


export const getById = async (req, res) => {
    try {
        const getAll = await Product.find( )
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}


export const deleteById = async (req, res) => {
   try {
    await Product.findByIdAndDelete(req.params.id)
   return res.status(200).json({message:"deleted"})
   } catch (error) {
    console.log(error);
   }
}


export const updateById = async (req, res) => {
   try {
    await Product.findByIdAndUpdate(req.params.id,{$set:req.body})
    return res.status.json({message:"updated"})
   } catch (error) {
    console.log(error);
   }
 }


 export const searchProduct = async (req,res)=>{
     try {
        console.log('bbb');
        console.log(req?.query?.name);
         let filter = {}
         if (req?.query?.name) {
             filter = { pdtname: { $regex: req.query.name, $options: 'i' } }
         }
         const Products = await Product.find(filter)
         return res.status(200).json({ result: Products })
     } catch (error) {
         console.log('error searching for products', error);
         return res.status(500).json({ message: "internal server error" })
     }
   
    

    }
 

