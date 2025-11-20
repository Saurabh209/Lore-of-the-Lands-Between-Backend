
import { Bosses } from "../models/Bosses.model.js"


export const getBosses = async (req, res) => {
    try {
        const allBosses = await Bosses.find({})
        if (!allBosses) {
            return res.status(404).json({
                success: true,
                message: "No boss exist in arena"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Bosses Are summoned",
            data: allBosses
        })
    } catch (error) {
        console.log("Boss are lost in shadow relm: ", error)
        return res.status(500).json({
            success: true,
            message: "Boss are lost in shadow relm"
        })
    }
}

export const postBosses = async (req, res) => {
    const { name, type, difficulty, health, imageUrl, cutScene, weakness, resistance, moves, strategy, phases, rewards } = req.body
    try {
        const isBossesExist = await Bosses.findOne({ name: req.body.name })
        if (isBossesExist) {
            return res.status(409).json({
                success: true,
                message: "bosses already summoned in battle"
            })
        }
        const currentBoss = await Bosses.create({
            name, type, difficulty, health, imageUrl, cutScene, weakness, resistance, moves, strategy, phases, rewards
        })
        return res.status(200).json({
            success: true,
            message: "Boss summoned in the battle",
            boss: currentBoss
        })
    } catch (error) {
        console.log("bosses error: ", error)
        return res.status(500).json({
            success: false,
            message: "boss is unable to summoned"
        })
    }
}
