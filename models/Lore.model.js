import mongoose from "mongoose";

const LoreSchema = new mongoose.Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
});

export const Lore = mongoose.model("Lore", LoreSchema);