import Lottery from "./modules/lottery.js";
import Player from "./modules/player.js";
import { politicians, folk } from "./data/data.js";
const lottery = new Lottery(politicians);

lottery.startDrawing();

console.log(lottery);
