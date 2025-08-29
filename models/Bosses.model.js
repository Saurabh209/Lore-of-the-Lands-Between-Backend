import mongoose from "mongoose";

const BossSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    difficulty: { type: String, required: true },
    health: { type: String, required: true },
    image: { type: String, required: true },
    weaknesses: { type: [String], required: true },
    resistances: { type: [String], required: true },
    moves: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            danger: { type: String, enum: ["Low", "Medium", "High", "Extreme"], required: true }
        }
    ],
    strategy: { type: String, required: true },
    phases: { type: Number, required: true },
    rewards: { type: [String], required: true }

});

export const Bosses = mongoose.model("Bosses", BossSchema);