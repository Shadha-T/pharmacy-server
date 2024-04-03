import mongoose from "mongoose"


const blogSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    blogimage:{
        type:String
    }
  
},
{
    timestamps:true,
})

export const Blog = mongoose.model("Blog",blogSchema)