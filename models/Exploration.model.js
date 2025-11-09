import mongoose from "mongoose";

const AllExploration = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    subtitle:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    imageUrl:{
        type:String,
        trim:true,
        required:true
    },
    icon:{
        type:String,
        trim:true,
        required:true
    },
    difficulty:{
        type:String,
        trim:true,
        required:true
    },
    boss:{
        type:String,
        trim:true,
        required:true
    },
    keyLocations:{
        type:[String],
        trim:true,
        required:true
    },
    secrets:{
        type:[String],
        trim:true,
        required:true
    },
    lore:{
        type:String,
        trim:true,
        required:true
    }
})

export const Exploration = mongoose.model("Exploration",AllExploration)