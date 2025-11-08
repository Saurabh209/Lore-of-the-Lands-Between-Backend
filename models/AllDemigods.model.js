import mongoose from "mongoose";

const demiGodsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
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
    default: []
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
  },
  family: {
    type: Map,
    of: [String],
    default: {}
  },
  curse:{
    type:String,
    trim:true
  }
});


export const Demigods = mongoose.model("Demigods", demiGodsSchema);
