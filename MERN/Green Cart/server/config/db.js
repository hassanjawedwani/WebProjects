import mongoose from 'mongoose';

const connectDB =  async () => {
  try {
    mongoose.connection.on('connected', () => console.log("Database Connected!"));
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.error("Database Connection Error: ", err.message);
  }
}

export default connectDB;