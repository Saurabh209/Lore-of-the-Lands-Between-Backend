import mongoose from "mongoose";


const AllEpicBattles = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    subtitle: {
        type: String,
        trim: true,
        required: true,
    },
    location: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    imageUrl: {
        type: String,
        trim: true,
        required: true
    },
    outcome: {
        type: String,
        trim: true,
        required: true
    },
    casualties: {
        type: String,
        trim: true,
        required: true
    },
    aftermath: {
        type: String,
        trim: true,
        required: true
    },
    details: {
        type: String,
        trim: true,
        required: true
    },
    keyMoments: {
        type: [String],
        trim: true,
        required: true
    }

}, { timestamps: true })

export const EpicBattles = mongoose.model("EpicBattles", AllEpicBattles) 