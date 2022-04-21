'use strict';

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('draw');
    } else console.log('not draw');
}

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

// function playerPlay() {
//     playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

//     while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
//         console.log('not rock, paper, or scissors');
//         playerSelection = prompt('Rock, Paper, or Scissors?');
//     }

//     console.log(`player selection is ${playerSelection}`);
//     return playerSelection;
// }
