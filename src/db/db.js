import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb Connected");
    } catch (error) {
        console.log("Mongodb is not connected!"); 
    }
}

export default connectDB;