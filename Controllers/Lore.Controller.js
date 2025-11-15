import { Lore } from '../models/Lore.model.js'



export const getLore = async (req, res) => {
    try {
        const allLore = await Lore.find({})
        if (!allLore) {
            return res.status(404).json({
                success: false,
                messgage: "The lore you seek has faded into the void."
            })
        }
        return res.status(200).json({
            success: true,
            message: "Lore uncovered successfully.",
            data: allLore
        })
    } catch (error) {
        console.log("Lore are lost in shadow relm: ", error)
        return res.status(500).json({
            success:true,
            message:"Lore are lost in shadow relm"
        })
    }
}

export const postLore = async (req, res) => {
    const { title, icon, description, content } = req.body
    try {
        const isLoreExist = await Lore.findOne({ title })
        if (isLoreExist) {
            return res.status(409).json({
                success: false,
                message: "Lore Already Exists"
            })
        }
        const currentLore = await Lore.create({ title, icon, description, content })
        return res.status(200).json({
            success: true,
            message: "Lore Dumped",
            data: currentLore
        })

    } catch (error) {
        console.error("Lore Issue:", error)
        return res.status(500).json({
            success: false,
            message: "An error occurred during dumping lore"
        })
    }
}
