import mongoose from "mongoose";
import asynchandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config(); 

const connectDB = asynchandler(async () => {
  
//   console.log("MONGO_URI:", process.env.MONGO_URI);

  if (!process.env.MONGO_URI) {
    throw new Error("❌ MONGO_URI is not defined in .env file!");
  }

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`✅ MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
});

export default connectDB;
