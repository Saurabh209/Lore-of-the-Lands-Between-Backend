
import { Demigods } from '../models/AllDemigods.model.js'
import { Bosses } from "../models/Bosses.model.js";
import { EpicBattles } from "../models/EpicBattles.model.js";
import { Exploration } from "../models/Exploration.model.js";
import { Lore } from "../models/Lore.model.js";
import { WeaponsInvertory } from "../models/Weapons.model.js";




export const GetAllKnowledge = async (req, res) => {
    try {
        const allKnowledge = await Promise.all(
            Demigods.find(),
            Bosses.find(),
            EpicBattles.find(),
            Exploration.find(),
            Lore.find(),
            WeaponsInvertory.find()
        )
        if (!allKnowledge) {
            return res.status(404).json({
                success: false,
                message: "A true Tranished required to get all data",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Knowledge Ahead",
            data: allKnowledge
        })
    } catch (error) {
        console.log("No Knowledge Ahead: ",error)
        return res.status(500).json({
        })
    }
}