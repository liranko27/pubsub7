import prompt from "prompt";
prompt.start()

const numberOf = await prompt.get(['players'])
console.log(numberOf.players)

for (let i = 0; i < numberOf.players; i++) {
    const user = await prompt.get(['name', 'age'])
    console.log(user)
}


// import readline from "readline";

// // console.log(rl)
// const rl = readline.createInterface(process.stdin, process.stdout)

// rl.question('What is your name? ', name => {
//     console.log(name)
//     // rl.setPrompt('what is your age?')
//     // rl.prompt()
//     // rl.on('line', age => {
//     //     console.log(age)
//     // })
//     // console.log(age)
//     rl.close()
// })
// rl.question('what is your age? ', age => {
//     console.log(age)
// })