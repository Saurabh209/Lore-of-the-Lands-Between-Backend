import express from 'express';
import fs from 'fs';
import cors from 'cors';   

const Knowledge = JSON.parse(fs.readFileSync('./Knowledge.json', 'utf8'));

const app = express();

 
app.use(cors({
  origin: ['http://localhost:5173'],  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.get('/api/knowledge', (req, res) => {
  res.json(Knowledge);
  console.log("Knowledge sent!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
