import {Category} from "../model/categoryModel.js"


export const create =async (req, res) =>{

    try {
            const newData = new Category(req.body)
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
        const getAll = await Category.find()
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}


export const getById = async (req, res) => {
    try {
        const getAll = await Category .find( )
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}


export const deleteById = async (req, res) => {
   try {
    await Category.findByIdAndDelete(req.params.id)
   return res.status(200).json({message:"deleted"})
   } catch (error) {
    console.log(error);
   }
}


export const updateById = async (req, res) => {
   try {
    await Category.findByIdAndUpdate(req.params.id,{$set:req.body})
    return res.status.json({message:"updated"})
   } catch (error) {
    console.log(error);
   }
 }