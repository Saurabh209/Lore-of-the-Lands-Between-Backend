import express from 'express';
const Router = express.Router();

// Models


import { postDemigod } from '../Controllers/Demigods.Controller.js';
import { postExploration } from '../Controllers/Exploration.Controller.js'
import { postEpicBattle } from '../Controllers/EpicBattles.Controller.js'
import { postLore } from '../Controllers/Lore.Controller.js'
import { postWeapon } from '../Controllers/Weapons.Controller.js'


Router.post('/api/add/demigod', postDemigod)
Router.post('/api/add/exploration', postExploration)
Router.post(`/api/add/epicBattle`, postEpicBattle)
Router.post(`/api/add/lore`, postLore)
Router.post(`/api/add/weapon`, postWeapon)





export default Router;
