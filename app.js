'use strict';

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const playerPlay = function () {
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

    while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
        console.log('not rock, paper, or scissors');
        playerSelection = prompt('Rock, Paper, or Scissors?');
    }
    return playerSelection;
}

const computerPlay = function () {
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return computerSelection = options[randomNum];
}

const playRound = function () {
    playerPlay();
    computerPlay();

    if (playerSelection === computerSelection) {
        console.log('Draw!');
        return;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        console.log(`${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        console.log(`${computerSelection} beats ${playerSelection}`);
    }
}

const game = function () {
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log(`Round ${i}. Player Score: ${playerScore}, Computer score: ${computerScore}`);
    }
    if (playerScore === computerScore) {
        console.log('NO WINNER!');
    } else {
        console.log(`YOU ${(playerScore > computerScore) ? 'WIN!' : 'LOSE!'}, SCORE ${playerScore} to ${computerScore}`);
    }
}
game();









// function game() {

//     // for (let i = 0; i < 5; i++) {
//     //     playRound(playerSelection, computerSelection);
//     // }
// }

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         console.log(`Draw!`);
//         // winning conditions
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
//         console.log(`You win! ${ playerSelection } beats ${ computerSelection } `);
//         // losing conditions
//     } else console.log(`You lose! ${ computerSelection } beats ${ playerSelection } `);
// }

// function computerPlay() {
//     const options = ['rock', 'paper', 'scissors'];
//     let randomNum = Math.floor(Math.random() * 3);

//     console.log(`comp choice ${ options[randomNum] } `);
//     return options[randomNum];
// }

// const playerSelection = 'rock';
// const computerSelection = computerPlay();


// function playerPlay() {
//     playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

//     while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
//         console.log('not rock, paper, or scissors');
//         playerSelection = prompt('Rock, Paper, or Scissors?');
//     }

//     console.log(`player selection is ${ playerSelection } `);
//     return playerSelection;
// }
