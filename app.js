'use strict';

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const playerPlay = function () {
    // playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    playerSelection = e.target.value;

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
    playRound();
    // console.log(`Round ${i}. Player Score: ${playerScore}, Computer score: ${computerScore}`);
    if (playerScore === computerScore) {
        console.log('NO WINNER!');
    } else {
        console.log(`YOU ${(playerScore > computerScore) ? 'WIN!' : 'LOSE!'}, SCORE ${playerScore} to ${computerScore}`);
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.value);
        if (e.target.value === 'rock')
            playRound();
    })
})