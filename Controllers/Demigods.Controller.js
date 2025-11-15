
import express from 'express'
import { Demigods } from '../models/AllDemigods.model.js'


export const getDemigod = async (req, res) => {
    try {
        const allDemigods = await Demigods.find({})
        if (!allDemigods) {
            return res.status(404).json({
                success: false,
                message: "No Demogod found"
            })

        }
        return res.status(200).json({
            success: true,
            message: "Demigods are present",
            data: allDemigods
        })
    } catch (error) {
        console.log("demigods are lost in shadow relm: ", error)
        return res.status(500).json({
            success: true,
            message: "Demigods are lost in shadow relm"
        })
    }
}

export const postDemigod = async (req, res) => {
    try {
        const isDemiGodExist = await Demigods.findOne({ name: req.body.name })
        console.log("demogods: ", isDemiGodExist)
        if (isDemiGodExist) {
            console.log("DemiGod Already Exist")
            res.status(409).json({
                success: false,
                message: "Demigod Exists"
            })
        } else {
            const currentDemigod = await Demigods.create({
                name: req.body.name,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                lore: req.body.lore,
                abilities: req.body.abilities,
                status: req.body.status,
                location: req.body.location,
                difficulty: req.body.difficulty,
                phaseCount: req.body.phaseCount,
                healthPoint: req.body.healthPoint,
                drops: req.body.drops,
                family: req.body.family,
                curse: req.body.curse,
                prosthetics: req.body.prosthetics,
                titleEarned: req.body.titleEarned,
                affliction: req.body.affliction,
                belovedHourse: req.body.belovedHourse,
                festival: req.body.festival,
                transformation: req.body.transformation,
                organization: req.body.organization,
                alias: req.body.alias,
                loyality: req.body.loyality,
                outerGod: req.body.outerGod,
                dynasty: req.body.dynasty,
                obsession: req.body.obsession,
                mentors: req.body.mentors,
                followers: req.body.followers,
                goal: req.body.goal,
                ending: req.body.ending,
                conspiracy: req.body.conspiracy,
                creations: req.body.creations,
                kidnapper: req.body.kidnapper,
                sanctuary: req.body.sanctuary,
                deathCause: req.body.deathCause,
                legacy: req.body.legacy,
                friends: req.body.friends,
                corruption: req.body.corruption

            })
            res.status(200).json({
                succss: true,
                message: "demigod added",
                data: currentDemigod,
            })
        }
    } catch (error) {
        console.log("error: ", error)
    }
}

