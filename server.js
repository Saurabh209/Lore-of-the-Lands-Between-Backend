import express from 'express';
import fs from 'fs';
import cors from 'cors';   

const Knowledge = JSON.parse(fs.readFileSync('./Knowledge.json', 'utf8'));

const app = express();

 
app.use(cors());

app.get('/api/knowledge', (req, res) => {
  res.json(Knowledge);
});

app.get('/api/knowledge/exploration', (req, res) => {
  res.json(Knowledge[0]);
});

app.get('/api/knowledge/epicBattles', (req, res) => {
  res.json(Knowledge[1]);
});

app.get('/api/knowledge/demiGods', (req, res) => {
  res.json(Knowledge[2]);
});

app.get('/api/knowledge/bosses', (req, res) => {
  res.json(Knowledge[3]);
});

app.get('/api/knowledge/lore', (req, res) => {
  res.json(Knowledge[4]);
});

app.get('/api/knowledge/weapons', (req, res) => {
  res.json(Knowledge[5]);
});




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
