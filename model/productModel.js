import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image:{
        type:String,
    },
    pdtname: {
        type: String,
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
    },
    cost: {
        type: Number,
    },
    category_id:{
        type:mongoose.Types.ObjectId
    },
    images:[{
        image:String,
    }],
},
    {
        timestamps: true,
    }
);

export const Product = mongoose.model("Product", productSchema);
