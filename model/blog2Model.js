import mongoose from "mongoose"


const blogSchema2 = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    blog2image:{
        type:String
    }
  
  
},
{
    timestamps:true,
})

export const Blog2 = mongoose.model("Blog2",blogSchema2)