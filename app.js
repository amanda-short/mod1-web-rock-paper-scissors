/* Imports */
// import { getRandomItem, score } from '.utils.js';

let gameState = 'guess'; //guess, results
let guess = ''; //rock, paper, scissors
let computer = ''; //rock, paper, scissors
let result = '';
let wins = 0;
let losses = 0;

const options = ['Rock', 'Paper', 'Scissors']

const Rock = document.getElementById('choose-rock');
const Paper = document.getElementById('choose-paper');
const Scissors = document.getElementById('choose-scissors');

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');


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
rockButton.addEventListener('click', () => {
    handleFight('scissors');
});

//actions
function handleFight(pick) {
    computer = getRandomItem(guess);
    const result = score(pick, computer);

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
    gameState;
    loadPage();
}

playAgainButton.addEventListener('click', () => {
    playAgain();
});


/* Run page load code */
loadPage();