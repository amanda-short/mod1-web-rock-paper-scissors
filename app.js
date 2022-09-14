/* Imports */
import { getRandomItem, getRandomNumber } from '/utils.js';

let gameState = 'guess'; //guess, results
let guess = ''; //rock, paper, scissors
let computer = ''; //rock, paper, scissors
let result = '';
let wins = 0;
let losses = 0;

const options = ['rock', 'paper', 'scissors'];

const rock = document.getElementById('choose-rock');
const paper = document.getElementById('choose-paper');
const scissors = document.getElementById('choose-scissors');

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const playAgainButton = document.getElementById('play-again-button');


//functions
function loadPage() {
    displayGuess();
    displayComputer();
    displayScoreboard();
}

//events
rockButton.addEventListener('click', () => {
    handleFight('rock');

   
});
paperButton.addEventListener('click', () => {
    handleFight('paper');
});
scissorsButton.addEventListener('click', () => {
    handleFight('scissors');
});

//actions
function handleFight(pick) {
    computer = getRandomItem(guess);
    const result = getRandomNumber(pick, computer);

    if (result === 1) {
        wins++;
        // wins textContent = WHAT NEXT?!?!
    }
    if (result === 0) {
        draws++;
    }
    if (result === -1) {
        losses++;
    }
    total++;
    displayScoreboard();
}

function playAgain() {
    gameState = 'guess';
    loadPage();
}

playAgainButton.addEventListener('click', () => {
    playAgain();
}
);


/* Run page load code */
loadPage();