import mongoose from "mongoose";

const posterSchema = new mongoose.Schema({
    posterimage:{
        type:String,
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    percentage:{
        type:String
    },
    price:{
        type:String
    },
    offerprice:{
        type:String
    },
   
},
{
    timestamps:true,
})

export const Poster = mongoose.model("Poster",posterSchema)