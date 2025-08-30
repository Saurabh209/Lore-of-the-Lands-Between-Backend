import mongoose from "mongoose";

const KnowledgeSchema = new mongoose.Schema({
    
        exploration: { type: mongoose.Schema.Types.ObjectId, ref: 'Exploration' },
        lore: { type: mongoose.Schema.Types.ObjectId, ref: 'Lore' },
        epicBattles: { type: mongoose.Schema.Types.ObjectId, ref: 'EpicBattles' },
        bosses: { type: mongoose.Schema.Types.ObjectId, ref: 'Bosses' },
        demigods: { type: mongoose.Schema.Types.ObjectId, ref: 'Demigod' },
    
});

export const Knowledge = mongoose.model("Knowledge", KnowledgeSchema);