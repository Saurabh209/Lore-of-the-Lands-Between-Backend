import mongoose from "mongoose"

export default async function ConnectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017", {
            dbName: "LoreOfTheLandsBetween"
        });
        console.log("Database connected")
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
}