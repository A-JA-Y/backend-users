import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connection done");
        
    } catch (error) {
        console.log("Error connecting to DB", error);
        
    }
}

export default connectDB;