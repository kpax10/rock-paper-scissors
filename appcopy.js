'use strict';

const options = ['rock', 'paper', 'scissors'];
let randomNum = Math.floor(Math.random() * 3);
let computerSelection = '';
let playerSelection = '';

function computerPlay() {
    computerSelection = options[randomNum];
    console.log(`computer selection is ${computerSelection}`);
    return computerSelection;
}

function playerPlay() {
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

    while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
        console.log('not rock, paper, or scissors');
        playerSelection = prompt('Rock, Paper, or Scissors?');
    }

    console.log(`player selection is ${playerSelection}`);
    return playerSelection;
}

// function playRound(playerSelection, computerSelection) {
//     playerPlay();
//     computerPlay();

//     /*if (playerSelection === computerSelection) {
//         console.log(`DRAW! Play again!`);
//     } else */if (playerSelection === 'rock' && computerSelection === 'paper') {
//         console.log(`you lose, paper covers rock`);
//     } else console.log();
// }

// playRound();

