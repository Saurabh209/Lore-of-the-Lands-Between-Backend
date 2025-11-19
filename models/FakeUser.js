import mongoose from "mongoose";

const User = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    }
}, { timestamps: true })

export const Users = mongoose.model("Users", User)