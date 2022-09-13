/* Imports */

/* State */
let gameState = 'guess'; //guess, results
let guess = ''; //rock, paper, scissors
let result = ''; //win, lose, draw

let wins = 0;
let losses = 0;
let draw = 0;


/* Actions */
function loadPage() {
    displayGuess();
    displayResult();
    displayScoreboard();
}

function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;

    // Tie check
    if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
    }

    // Rock
    if (pInput === "Rock") {
        if (cInput === "Scissors") {
        alert(`${currentMatch} = You Win`);
        } else {
        alert(`${currentMatch} = Computer Wins`);
        }
    }
    // Paper
    else if (pInput === "Paper") {
        if (cInput === "Rock") {
            alert(`${currentMatch} = You Win`);
        } else {
            alert(`${currentMatch} = Computer Wins`);
        }
        }
      // Scissors
        else if (pInput === "Scissors") {
        if (cInput === "Paper") {
            alert(`${currentMatch} = You Win`);
        } else {
            alert(`${currentMatch} = Computer Wins`);
        }
    }
    function updateMoves(pInput, cInput) {
        document.getElementById("p-move").src = `./assets/${pInput}.svg`;
        document.getElementById("c-move").src = `./assets/${cInput}.svg`;
    }    
    


/* Components */
const options = document.querySelectorAll(".options");

options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.value;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];
        updateMoves(pInput, cInput)
        compareInputs(pInput, cInput);
    });
}


/* Run page load code */
loadPage()
