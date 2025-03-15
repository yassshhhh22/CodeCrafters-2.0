import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBconnect = async () => {
  try {
    const connectionobj = await mongoose.connect(process.env.MONGO_URI); // Removed /${DB_name}
    console.log("\n MongoDB Connected Successfully");
  } catch (error) {
    console.log("Error in DBconnect::", error);
    process.exit(1);
  }
};

export default DBconnect;
