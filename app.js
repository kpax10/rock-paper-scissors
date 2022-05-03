'use strict';

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const pScoreDom = document.querySelector('#player-score');
const compScoreDom = document.querySelector('#computer-score');
const computer = document.querySelector('.computer');
const roundInfo = document.createElement('p');
const endGameInfo = document.createElement('p');

const computerPlay = function () {
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return computerSelection = options[randomNum];
}

const playRound = function (e) {
    playerSelection = e.target.value;
    computerPlay();

    if (playerSelection === computerSelection) {
        roundInfo.textContent = 'Draw...'
        computer.appendChild(roundInfo);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        pScoreDom.textContent = playerScore;
        roundInfo.textContent = `${playerSelection} beats ${computerSelection}`
        computer.appendChild(roundInfo);
    } else {
        computerScore++;
        compScoreDom.textContent = computerScore;
        roundInfo.textContent = `${computerSelection} beats ${playerSelection}`
        computer.appendChild(roundInfo);
    }
}

const game = function (e) {
    playRound(e);
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach((btn) => btn.disabled = true);
        endGameInfo.textContent = `Game Over, you ${(playerScore > computerScore) ? 'Win!' : 'Lose!'}`;
        computer.appendChild(endGameInfo);
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', game));