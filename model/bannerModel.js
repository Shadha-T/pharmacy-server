import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    bannerimage:{
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

export const Banner = mongoose.model("Banner",bannerSchema)