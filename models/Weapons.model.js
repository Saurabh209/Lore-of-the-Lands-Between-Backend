import mongoose from "mongoose";


// child Schema
const infoSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    location: {
        type: [String],
        required: true
    },
    fp: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    skill: [
        {
            name: {
                type: String,
                required: true,
                trim: true
            },
            description: {
                type: String,
                required: true,
                trim: true
            },
            playback: {
                type: String,
                default: null,
                trim: true
            }
        }
    ],
    video: {
        type: String,
        default: null,
        trim: true
    }
})



// main Schema
const AllWeapons = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    attack: {
        physical: {
            type: Number,
            required: true,
        },
        magic: {
            type: Number,
            required: true,
        },
        fire: {
            type: Number,
            required: true,
        },
        lightning: {
            type: Number,
            required: true,
        },
        holy: {
            type: Number,
            required: true,
        },
        critical: {
            type: Number,
            required: true,
        }
    },
    guard: {
        physical: {
            type: Number,
            required: true
        },
        magic: {
            type: Number,
            required: true,
        },
        fire: {
            type: Number,
            required: true,
        },
        lightning: {
            type: Number,
            required: true,
        },
        holy: {
            type: Number,
            required: true,
        },
        critical: {
            type: Number,
            required: true,
        }

    },
    scaling: {
        strength: {
            type: String,

        },
        dexterity: {
            type: String,

        },
        faith: {
            type: String,

        },
        intelligence: {
            type: String
        },
        arcane: {
            type: String
        }
    },
    requiredStats: {
        strength: {
            type: String,
        },
        dexterity: {
            type: String
        },
        faith: {
            type: String
        },
        intelligence: {
            type: String
        },
        arcane: {
            type: String
        }
    },
    info: infoSchema
})



export const WeaponsInvertory = mongoose.model("Weapons", AllWeapons)
