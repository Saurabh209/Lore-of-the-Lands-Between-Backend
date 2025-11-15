import express from 'express';
const Router = express.Router();


// Controllers
import { postDemigod, getDemigod } from '../Controllers/Demigods.Controller.js';
import { postExploration, getExploration } from '../Controllers/Exploration.Controller.js'
import { postEpicBattle, getEpicBattles } from '../Controllers/EpicBattles.Controller.js'
import { postLore, getLore } from '../Controllers/Lore.Controller.js'
import { postWeapon, getWeapon } from '../Controllers/Weapons.Controller.js'
import { postBosses, getBosses } from '../Controllers/Bosses.Controller.js';
import { GetAllKnowledge } from '../Controllers/GetAllKnowledge.Controller.js';

// const knowledge = [getExploration, getEpicBattles, getDemigod, getBosses, getLore, getWeapon]

// Get data Routes
Router.get(`/api/knowledge/__all`, GetAllKnowledge)

Router.get(`/api/knowledge/__lore`, getLore)
Router.get('/api/knowledge/__demigods', getDemigod)
Router.get('/api/knowledge/__bosses', getBosses)
Router.get(`/api/knowledge/__epicbattles`, getEpicBattles)
Router.get(`/api/knowledge/__exploration`, getExploration)
Router.get(`/api/knowledge/__weapons`, getWeapon)


// Add data Routes
Router.post('/api/add/demigod', postDemigod)
Router.post('/api/add/exploration', postExploration)
Router.post(`/api/add/epicBattle`, postEpicBattle)
Router.post(`/api/add/lore`, postLore)
Router.post(`/api/add/weapon`, postWeapon)
Router.post('/api/add/bosses', postBosses)


export default Router;
