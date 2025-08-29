import express from 'express';
import fs from 'fs';

// import Knowledge from  './Demo.json' assert { type: 'json' };
const Knowledge = JSON.parse(fs.readFileSync('./Knowledge.json', 'utf8'));

const app  = express();

app.get('/lore/knowledge',((req,res)=>{
    res.json(Knowledge);

}));

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
