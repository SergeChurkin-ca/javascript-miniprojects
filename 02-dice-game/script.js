const button = document.querySelector('button');
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const figure1 = document.querySelector('.figure1')
const figure2 = document.querySelector('.figure2')
const output = document.getElementById('output')

button.addEventListener('click', function() {
    let rolls = [roll(6), roll(6)]
    console.log(rolls)

    let temp;

    rolls[0] === rolls[1] ? temp = 'draw' :
        rolls[0] > rolls[1] ? temp = 'Player 1 wins' :
        temp = 'Player 2 wins'

    player1.innerHTML = rolls[0]
    player2.innerHTML = rolls[1]


    return output.innerText = temp

})

function roll(num) {
    let rNumber = Math.floor(Math.random() * num) + 1;
    let n = 9855 + rNumber;
    let char = "&#" + n + ";";
    return rNumber + " " + char;
}


// &#9856;