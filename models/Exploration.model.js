import mongoose from 'mongoose';

const ExplorationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    icon: { type: String, required: true },
    difficulty: { type: String, required: true },
    boss: { type: String, required: true },
    keyLocations: { type: [String], required: true },
    secrets: { type: [String], required: true },
    lore: { type: String, required: true },

});

export const Exploration  = mongoose.model('Exploration',ExplorationSchema);