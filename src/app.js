import { boom7Game } from "./boom.js";
import { isEndWith7 } from "../client/isEndWith7.js";
import { isDevidedWith7 } from "../client/isDevidedWith7.js";

import readline from 'readline'

const newGame = new boom7Game(100)
newGame.on('newNumber', isEndWith7.bind({ name: 'Liran' }))
newGame.on('newNumber', isDevidedWith7.bind({ name: 'Liran' }))
newGame.startGame()


