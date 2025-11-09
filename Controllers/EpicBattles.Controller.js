

import { EpicBattles } from '../models/EpicBattles.model.js'


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