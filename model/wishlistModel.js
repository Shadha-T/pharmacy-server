import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
   quantity:{
type:Number,
default:1
   },
   
},
    {
        timestamps: true,
    }
);

export const Wishlist = mongoose.model("Wishlist", wishlistSchema);
