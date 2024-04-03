import mongoose from "mongoose"



const categorySchema = new mongoose.Schema({
    categoryimage:{
        type:String
    },
    categoryname:{
        type:String
    },
    categorydescription:{
        type:String
    },
  
},
{
    timestamps:true,
})

export const Category = mongoose.model("Category",categorySchema)