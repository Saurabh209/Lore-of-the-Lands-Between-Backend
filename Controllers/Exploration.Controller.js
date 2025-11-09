import { Exploration } from '../models/Exploration.model.js'




export const postExploration = async (req, res) => {
    const { name, subtitle, description, imageUrl, icon, difficulty, boss, keyLocations, secrets, lore } = req.body
    try {
        const isLocationExist = await Exploration.findOne({ name: req.body.true })

        if (isLocationExist) {
            res.status(409).json({
                success: false,
                message: "This location Exist"
            })
        } else {
            const currentExploration = await Exploration.create({
                name, subtitle, description, imageUrl, icon, difficulty, boss, keyLocations, secrets, lore
            })
            res.status(200).json({
                success: true,
                message: "location added",
                data: currentExploration
            })
        }
    } catch (error) {
        res.status(500).json({
            success: true,
            error: error
        })
    }
}