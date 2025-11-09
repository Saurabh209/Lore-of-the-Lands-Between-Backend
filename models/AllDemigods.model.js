import mongoose, { trusted } from "mongoose";

const demiGodsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: trusted },
  title: { type: String, required: true },
  description: { type: String, required: true, trim: true },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  lore: {
    type: String,
    required: true
  },
  abilities: {
    type: [String],
    default: undefined
  },
  status: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true,
    trim: true
  },
  phaseCount: {
    type: Number,
    default: null
  },
  healthPoint: {
    type: Number,
    default: null
  },
  drops: {
    type: [String],
    trim: true,
    default: undefined
  },
  family: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    default: undefined
  },

  // Malenia & morgot
  curse: {
    type: [String],
    trim: true,
    default: undefined
  },
  prosthetics: {
    type: [String],
    trim: true,
    default: undefined
  },
  titleEarned: {
    type: [String],
    trim: true,
    default: undefined
  },
  // Radhan
  affliction: {
    type: String,
    trim: true
  },
  belovedHourse: {
    type: String,
    trim: true
  },
  festival: {
    type: String,
    trim: true
  },
  // Rykard
  transformation: {
    type: String,
    trim: true
  },
  organization: {
    type: String,
    trim: true
  },
  domain:{
    type:String,
    trim:true
  },
  reputation:{
    type:String,
    trim:true
  },
  alias: {
    type: String,
    trim: true
  },
  loyality: {
    type: String,
    trim: true
  },
  // Mogh
  outerGod: {
    type: String,
    trim: true
  },
  dynasty: {
    type: String,
    trim: true
  },
  obsession: {
    type: String,
    trim: true
  },
  mentors: {
    type: [String],
    trim: true,
    default: undefined
  },
  followers: {
    type: [String],
    trim: true,
    default: undefined
  },
  goal: {
    type: String,
    trim: true
  },
  ending: {
    type: String,
    trim: true
  },
  conspiracy: {
    type: String,
    trim: true
  },
  // Miquella
  creations: {
    type: [String],
    trim: true,
    default: undefined
  },
  kidnapper: {
    type: String,
    trim: true
  },
  sanctuary: {
    type: String,
    trim: true
  },
  // Godwyn
  deathCause: {
    type: String,
    trim: true
  },
  legacy: {
    type: String,
    trim: true
  },
  friends: {
    type: [String],
    trim: true,
    default: undefined
  },
  corruption: {
    type: String,
    trim: true
  }
});


export const Demigods = mongoose.model("Demigods", demiGodsSchema);
