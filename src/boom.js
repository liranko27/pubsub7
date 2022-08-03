import EventEmitter from 'events'



export class boom7Game extends EventEmitter {
    constructor(maxNumber = 10) {
        super()
        this.number = 1
        this.maxNumber = maxNumber
    }
    startGame() {
        for (let i = this.number; i <= this.maxNumber; i++) {
            this.number = i
            this.emit('newNumber', this.number)
            console.log(this.number)
        }

    }

    // registerPlayer() {
    //     const nameInput = readline.createInterface(process.stdin, process.stdout)
    //     nameInput.question('what is your name ? ', name => {
    //         console.log(name)
    //         nameInput.close()
    //     })
    //     console.log(nameInput)
    //     // const ageInput = readline.createInterface(process.stdin, process.stdout)
    //     // ageInput.question('what is your age ? ', age => {
    //     //     console.log(age)
    //     //     ageInput.close()
    //     // })

    // }
}


// const newGame = new boom7Game()

// // newGame.registerPlayer()
// newGame.startGame()
// newGame.game()
// newGame.game()
// console.log(newGame)




// console.log(registerPlayer())


