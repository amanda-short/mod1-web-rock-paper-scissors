/* Imports */

/* State */

/* Actions */
function loadPage() {}
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

/* Component */
// get DOM
// display
// event listeners



/* Run page load code */
loadPage()
