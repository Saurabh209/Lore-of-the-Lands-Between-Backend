import express from 'express';
import fs from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
import ConnectDB from './ConnectDB.js'

// Models
import { Demigods } from './models/AllDemigods.model.js'

const Knowledge = JSON.parse(fs.readFileSync('./Knowledge.json', 'utf8'));

const app = express();
const BaseUrl = "/api/knowledge";

ConnectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get(`${BaseUrl}`, (req, res) => {
  res.json(Knowledge);
});

app.get(`${BaseUrl}/exploration`, (req, res) => {
  res.json(Knowledge[0]);
});

app.get(`${BaseUrl}/epicBattles`, (req, res) => {
  res.json(Knowledge[1]);
});

app.get(`${BaseUrl}/demiGods`, (req, res) => {
  res.json(Knowledge[2]);
});

app.get(`${BaseUrl}/bosses`, (req, res) => {
  res.json(Knowledge[3]);
});

app.get(`${BaseUrl}/lore`, (req, res) => {
  res.json(Knowledge[4]);
});

app.get(`${BaseUrl}/weapons`, (req, res) => {
  res.json(Knowledge[5]);
});


// post routes

app.post('/api/add/demigod', async (req, res) => {
  console.log("Start")

  try {
    const isDemiGodExist = await Demigods.findOne({ name: req.body.name })
    console.log("demogods: ", isDemiGodExist)
    if (isDemiGodExist) {
      console.log("DemiGod Already Exist")
      res.status(400).json({
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
        otherStats: req.body.otherStats
      })
      res.json({ currentDemigod })
    }
  } catch (error) {
    console.log("error: ", error)
  }
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
