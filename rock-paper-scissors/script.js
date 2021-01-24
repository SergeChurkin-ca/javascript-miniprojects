const message = document.querySelector('.message')

const score = document.querySelector(".score");

const buttons = document.querySelectorAll("button");

console.log(buttons)

let winner = [0, 0]

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame)
}

function playGame(e) {

    let human = e.target.innerText
    let computer = Math.floor(Math.random() * Math.floor(3))
    computer === 2 ? computer = 'Rock' : computer === 1 ? computer = 'Paper' : computer = 'Scissors'

    message.innerText = ('Human: ' + (human) + "\n" + ' Computer:' + computer)

    function result() {
        return computer === human ? 'Draw' :
            computer === 'Rock' && human === 'Paper' ? 'human wins' + winner[0]++ :
            computer === 'Rock' && human === 'Scissors' ? 'human wins' + winner[0]++ :

            computer === 'Paper' && human === 'Rock' ? 'computer wins' + winner[1]++ :
            computer === 'Paper' && human === 'Scissors' ? 'human wins' + winner[0]++ :

            computer === 'Scissors' && human === 'Paper' ? 'computer wins' + winner[1]++ :
            computer === 'Scissors' && human === 'Rock' ? 'computer wins' + winner[1]++ : 'error'
    }

    console.log(result())
        // console.log(winner)
    message.innerText = "Human: " + e.target.innerText + " Computer: " + computer + "\n" + 'Final score: Human ' + winner + ' Computer' + '\n' + result();
}