import { WeaponsInvertory } from "../models/Weapons.model.js"


export const postWeapon = async (req, res) => {
    const { name,type, attack, guard, scaling, requiredStats, info } = req.body
    try {
        const isWeaponexist = await WeaponsInvertory.findOne({ name })

        if (isWeaponexist) {
            return res.status(409).json({
                success: false,
                message: "Weapon already in Arsenal"
            })
        }

        const currentWeapon = await WeaponsInvertory.create({
            name, type,  attack, guard, scaling, requiredStats, info
        })
        res.status(200).json({
            success: true,
            message: "Weapon added into Arsenal",
            weaponDetail: currentWeapon
        })
    } catch (error) {
        console.error("Weapon Issue:", error)
        return res.status(500).json({
            success: false,
            message: "Weapon damaged during transporting to Arsenal"
        })
    }
}