'use strict';
/*
prompt user for rock, paper, or scissors
    store in variable

generate random rock, paper, or scissors choice for computer
    store in variable

compare player and computer values:
    if player wins,
        add 1 point to player 1
    if comp wins,
        add 1 point to computer
*/
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

    // console.log(`player selection is ${playerSelection}`);
    return playerSelection;
}

const computerPlay = function () {
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);

    // console.log(`computer selection is ${options[randomNum]}`);
    return computerSelection = options[randomNum];
}

const playRound = function () {
    playerPlay();
    computerPlay();
    console.log(playerSelection, computerSelection);
    // winning scenarios
    if (playerSelection === computerSelection) {
        return;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        console.log(`player ${playerScore}`);
    } else {
        computerScore += 1;
        console.log(`computer ${computerScore}`);
    }
}

const game = function () {
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log(`Round ${i}. Player Score: ${playerScore}, Computer score: ${computerScore}`);
        console.log('================');

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
//         console.log(`You win! ${playerSelection} beats ${computerSelection}`);
//         // losing conditions
//     } else console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
// }

// function computerPlay() {
//     const options = ['rock', 'paper', 'scissors'];
//     let randomNum = Math.floor(Math.random() * 3);

//     console.log(`comp choice ${options[randomNum]}`);
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

//     console.log(`player selection is ${playerSelection}`);
//     return playerSelection;
// }
