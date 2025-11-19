import express from 'express';
import fs from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
import ConnectDB from './ConnectDB.js'
import dotenv from 'dotenv'
import Router from './Routes/Router.js'

// Models


const Knowledge = JSON.parse(fs.readFileSync('./Knowledge.json', 'utf8'));

const app = express();
dotenv.config();
app.use(express.json());
app.use(Router);

const BaseUrl = "/api/knowledge";

// summon me to make conntection to database\
ConnectDB();

// app.use(cors());

app.use(cors({
  origin: [
    "http://localhost:5173",       
    "http://localhost:3000",
    "https://crud-assignment-ten.vercel.app",
    "https://lore-of-the-lands-between.vercel.app"
  ],
  credentials: true,
}));

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







const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
