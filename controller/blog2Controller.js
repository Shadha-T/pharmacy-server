
import { Blog2 } from "../model/blog2Model.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"



export const create =async (req, res) =>{

    try {
            const newData = new Blog2(req.body)
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
        const getAll = await Blog2.find()
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}


export const getById = async (req, res) => {
    try {
        const getAll = await Blog2.find( )
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}


export const deleteById = async (req, res) => {
   try {
    await Blog2.findByIdAndDelete(req.params.id)
   return res.status(200).json({message:"deleted"})
   } catch (error) {
    console.log(error);
   }
}


export const updateById = async (req, res) => {
   try {
    await Blog2.findByIdAndUpdate(req.params.id,{$set:req.body})
    return res.status.json({message:"updated"})
   } catch (error) {
    console.log(error);
   }
 }
 

