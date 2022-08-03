import EventEmitter from 'events'
export class boom7Game extends EventEmitter {
    constructor(maxNumber = 100) {
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
}

