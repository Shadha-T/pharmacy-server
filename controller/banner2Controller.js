import { Banner2 } from "../model/banner2Model.js";



export const create =async (req,res)=>{
    console.log(req.body);
    try {
        const nwdata = new Banner2(req.body)
    const saveData = await nwdata.save()
    if (saveData){
        return res.status(201).json({ result: saveData, message: 'successfully inserted ' });
    } 
    } catch (error) {
        return res.status(404).json({ message: error.message || 'error' }); 
    }
   
}



export const getAll = async (req, res) => {
    try {
        const getAll = await Banner2.find()
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}




export const getById = async (req, res) => {
    try {
        const getAll = await Banner2.find( )
          return res.status(200).json({ result: getAll})
    } catch (error) {
        console.log(error);
    }
}


export const deleteById = async (req, res) => {
    try {
     await Banner2.findByIdAndDelete(req.params.id)
    return res.status(200).json({message:"deleted"})
    } catch (error) {
     console.log(error);
    }
 }


 
export const updateById = async (req, res) => {
    console.log(req.body);
    try {
     await Banner2.findByIdAndUpdate(req.params.id,{$set:req.body})
     return res.status(200).json({message:"updated"})
    } catch (error) {
     console.log(error);
    }
  }