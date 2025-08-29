import mongoose from "mongoose";

const FamilySchema = new mongoose.Schema({
  mother: { type: String },
  father: { type: String },
  twin_brother: { type: String },
  twin_sister: { type: String },
  siblings: { type: [String], default: [] },
  half_siblings: { type: [String], default: [] },
  ancestor: { type: String },
  relation: { type: String },
}, { _id: false });

const DemigodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String },
  description: { type: String },
  image: { type: String },
  lore: { type: String },
  abilities: { type: [String], default: [] },
  status: { type: String },
  location: { type: String },
  difficulty: { type: String },
  phase_count: { type: Number },
  health_points: { type: Number },
  drops: { type: [String], default: [] },
  family: { type: FamilySchema },

  // Optional/unique fields
  curse: { type: String },
  prosthetics: { type: [String], default: [] },
  title_earned: { type: String },
  affliction: { type: String },
  beloved_horse: { type: String },
  festival: { type: String },
  transformation: { type: String },
  organization: { type: String },
  domain: { type: String },
  reputation: { type: String },
  alias: { type: String },
  loyalty: { type: String },
  outer_god: { type: String },
  dynasty: { type: String },
  obsession: { type: String },
  mentors: { type: [String], default: [] },
  followers: { type: [String], default: [] },
  goal: { type: String },
  ending: { type: String },
  conspiracy: { type: String },
  creations: { type: [String], default: [] },
  kidnapper: { type: String },
  sanctuary: { type: String },
  death_cause: { type: String },
  legacy: { type: String },
  friends: { type: [String], default: [] },
  corruption: { type: String },
});

export const Demigod = mongoose.model("Demigod", DemigodSchema);
