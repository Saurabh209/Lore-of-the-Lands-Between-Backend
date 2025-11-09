import mongoose from "mongoose"
import dotenv from 'dotenv'
export default async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MongoDB_URL, {
            dbName: "LoreOfTheLandsBetween"
        });
        console.log("Database connected")
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
}