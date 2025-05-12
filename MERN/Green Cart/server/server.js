import express from "express";
import cors from 'cors';
import 'dotenv/config';
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import sellerRouter from "./routes/sellerRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || 4000;


await connectDB();


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (_, res) => res.send("Api is working"));

app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.listen(port, () => console.log("Server is listening at port: ", port));