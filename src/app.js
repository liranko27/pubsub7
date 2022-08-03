import { boom7Game } from "./boom.js";
import { isEndWith7 } from "../client/isEndWith7.js";
import { isDevidedWith7 } from "../client/isDevidedWith7.js";
import { Player } from "../client/player.js";
import prompt from "prompt";
// import fs from 'fs'

// const file = fs.readFile('records.txt', 'utf8', (err, data) => {
//     fs.writeFile('records.txt', 'player name')
// })

prompt.start()
const maxNumber = await prompt.get(['maxNumber'])
const newGame = new boom7Game(maxNumber.max)

const numberOf = await prompt.get(['players'])

for (let i = 0; i < numberOf.players; i++) {
    const { name, age } = await prompt.get(['name', 'age'])
    const player = new Player(name, age)
    newGame.on('newNumber', isEndWith7.bind(player))
    newGame.on('newNumber', isDevidedWith7.bind(player))
}
newGame.startGame()


