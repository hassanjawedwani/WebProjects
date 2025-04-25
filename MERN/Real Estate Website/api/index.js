import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import listingRouter from './routes/listing.routes.js';
import ExpressError from './utils/ExpressError.js';
const app = express();
const port = 8080;
import cookieParser from 'cookie-parser';
import cors from 'cors';

app.use(cors({
  origin: "http://localhost:5173", // 👈 must match your frontend origin
  credentials: true,               // 👈 allow sending cookies
}));


async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main().then(() => {
  console.log("Database Connected with Server");
}).catch(err => {
  console.log("Database Connection Error: ", err);
});

app.use(express.json());
app.use(cookieParser())

app.use("/api/user", userRouter);
app.use("/api/auth/", authRouter)
app.use("/listings", listingRouter);

app.use((err, req, res, next) => {
  console.log("error handling middleware: ", err);
  const errStatus = err.status || 499;
  const errMessage = err.message || err.errmsg || "Internal Server Error";
  res.status(errStatus).json({
    ok: false,
    status: errStatus,
    message: errMessage
  })
})

app.listen(port, () => {
  console.log(`Server is listening at port : ${port}`);
})