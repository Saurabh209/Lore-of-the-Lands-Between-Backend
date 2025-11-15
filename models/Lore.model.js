import mongoose from "mongoose";

const AllLore = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    icon: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    }
}, { timestamps: true })

export const Lore = mongoose.model("Lore", AllLore)