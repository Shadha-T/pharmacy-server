import mongoose from "mongoose"


const bannerSchema2 = new mongoose.Schema({

        bannerimage2:{
            type:String
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

export const Banner2 = mongoose.model("Banner2",bannerSchema2)