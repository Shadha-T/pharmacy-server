import express from "express";
import connectDb from "./config/db.connection.js";
import dotenv from"dotenv";
import userRoute from "./routes/userRoute.js"
import cors from "cors"
import adminRoute from "./routes/adminRoute.js"
import productRoute from "./routes/productRoute.js"
import bannerRoute from"./routes/bannerRoute.js"
import blogRoute from "./routes/blogRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import banner2Route from "./routes/banner2Route.js"
import blog2Route from "./routes/blog2Route.js"
import cartRoute from './routes/cartRoute.js'
import wishlistRoute from './routes/wishlistRoute.js'
import posterRoute from './routes/posterRoute.js'



const app = express();
connectDb();
dotenv.config();
app.use(express.json());
app.use(cors())
app.use(express.json({limit:"100mb"}))
app.use("/api/user",userRoute)
app.use('/api/admin',adminRoute)
app.use("/api/product",productRoute)
app.use("/api/banner",bannerRoute)
app.use("/api/blog",blogRoute)
app.use("/api/blog2",blog2Route)
app.use("/api/category",categoryRoute)
app.use("/api/banner2",banner2Route)
app.use('/api/cart', cartRoute)
app.use('/api/wishlist',wishlistRoute)
app.use('/api/poster',posterRoute)




app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on PORT ${process.env.PORT || 3000}`);
 })