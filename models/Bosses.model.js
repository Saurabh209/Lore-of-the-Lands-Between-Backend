import mongoose from "mongoose";


const moves = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    danger: {
        type: String,
        trim: true,
        required: true
    },
    playback: {
        type: String,
        trim: true,
        default: null
    }
})

const AllBosses = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    difficulty: {
        type: String,
        required: true,
        trim: true
    },
    health: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    cutScene: {
        type: String,
        trim: true,
        default: null
    },
    weakness: {
        type: [String],
        required: true
    },
    resistance: {
        type: [String],
        required: true
    },
    moves: [moves],
    strategy: {
        type: String,
        required: true,
        trim: true
    },
    phases: {
        type: Number,
        required: true
    },
    rewards: {
        type: [String],
        required: true,
        trim: true
    }
}, { timestamps: true })

export const Bosses = mongoose.model("Bosses", AllBosses);