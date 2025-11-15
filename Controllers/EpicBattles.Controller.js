

import { EpicBattles } from '../models/EpicBattles.model.js'


export const getEpicBattles = async (req, res) => {
    try {
        const allBattles = await EpicBattles.find({})
        if (!allBattles) {
            return res.status(404).json({
                success: true,
                message: "No Battle exist in lands between"
            })
        }
        return res.status(200).json({
            success: true,
            message: "battles are seen",
            data: allBattles
        })
    } catch (error) {
        console.log("battles are lost in history ", error)
        return res.status(500).json({
            success: true,
            message: "Battles are lost in history "
        })
    }
}

export const postEpicBattle = async (req, res) => {
    const { name, subtitle, location, description, imageUrl, outcome, casualties, aftermath, details, keyMoments } = req.body
    try {
        const isEpicBattleExist = await EpicBattles.findOne({ name })

        if (isEpicBattleExist) {
            res.status(409).json({
                success: false,
                message: "Already Exist"
            })
        } else {
            const currentBattle = await EpicBattles.create({
                name,
                subtitle,
                location,
                description,
                imageUrl,
                outcome,
                casualties,
                aftermath,
                details,
                keyMoments
            })
            res.status(200).json({
                success: true,
                message: "Added Successfuly",
                data: currentBattle
            })
        }
    } catch (error) {
        console.error("Epic Battle Error:", error);
        return res.status(500).json({
            success: false,
            message: "A fatal error occurred during the battle.",
        });
    }
}