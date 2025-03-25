import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import ExpressError from './utils/ExpressError.js';
const app = express();
const port = 8080;


async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main().then(() => {
  console.log("Database Connected with Server");
}).catch(err => {
  console.log("Database Connection Error: ", err);
});

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth/", authRouter)

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Internal Server Error";
  res.status(errStatus).json({
    ok: false,
    status: errStatus,
    message: errMessage
  })
})

app.listen(port, () => {
  console.log(`Server is listening at port : ${port}`);
})