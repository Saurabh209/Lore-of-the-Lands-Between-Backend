import mongoose from "mongoose";

const EpicBattlesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subtitle: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    outcome: { type: String, required: true },
    casualties: { type: String, required: true },
    aftermath: { type: String, required: true },
    details: { type: String, required: true },
    keyMoments: { type: [String], required: true },
    
});

export const EpicBattles = mongoose.model("EpicBattles", EpicBattlesSchema);