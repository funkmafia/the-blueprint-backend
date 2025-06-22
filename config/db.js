import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.log("MongoDB connection error:", err.message);
  }
};
export default connectToDB;
