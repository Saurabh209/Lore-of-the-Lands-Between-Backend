import mongoose from "mongoose";


const familySchema = new mongoose.Schema({
    mother: { type: String, required: true },
    father: { type: String, required: true },
    half_siblings: { type: [String], required: true }
}, { _id: false });

const AllDemigodsSchema = new mongoose.Schema({
    name:{type: String, required: true},
    title:{type:String, required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    lore:{type:String, required:true},
    abilities:[{type:String, required:true}],
    status:{type:String,required:true},
    location:{type:String, required:true},
    difficulty:{type:String, required:true},
    family:[{
        mother:{type:String, required:true},
        father:{type:String, required:true},
        half_
    }]
});

export const FamilySchema = mongoose.model("FamilySchema", familySchema);
export const AllDemigods = mongoose.model("AllDemigods", AllDemigodsSchema);