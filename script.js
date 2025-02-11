// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
alert("YAY! YOU DID IT!");
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");


// rockBtn.onclick = alertFunction;

// METHOD 3
// rockBtn.addEventListener("click", alertFunction);

// On click, a random choice is generated for the computer between the three buttons, and when the computer selects something that beats you, the color of your button becomes red and theirs green. If you win, the opposite happens. If it's a tie, both buttons turn yellow. Functionality below

document.addEventListener("DOMContentLoaded", function () {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");

    let wins = 0;
    let losses = 0;
    let ties = 0;

    function getComputerChoice() {
        let rand = Math.floor(Math.random() * 3); // 0 to 2
        if (rand === 0) {
            return "Rock";
        } else if (rand === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    let rPrevColor = rockBtn.style.backgroundColor;
    let pPrevColor = paperBtn.style.backgroundColor;
    let sPrevColor = scissorsBtn.style.backgroundColor;

    function colorReset() {
        rockBtn.style.backgroundColor = rPrevColor;
        paperBtn.style.backgroundColor = pPrevColor;
        scissorsBtn.style.backgroundColor = sPrevColor;
    }

    rockBtn.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        if (computerChoice === "Rock") {
            rockBtn.style.backgroundColor = "yellow";
            ties++;
        } else if (computerChoice === "Paper") {
            rockBtn.style.backgroundColor = "red";
            paperBtn.style.backgroundColor = "green";
            losses++;
        } else {
            rockBtn.style.backgroundColor = "green";
            scissorsBtn.style.backgroundColor = "red";
            wins++;
        }
        // reset color after 1 second
        setTimeout(colorReset, 1000);
        updateScreen();
    });

    paperBtn.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        if (computerChoice === "Rock") {
            paperBtn.style.backgroundColor = "green";
            rockBtn.style.backgroundColor = "red";
            wins++;
        } else if (computerChoice === "Paper") {
            paperBtn.style.backgroundColor = "yellow";
            ties++;
        } else {
            paperBtn.style.backgroundColor = "red";
            scissorsBtn.style.backgroundColor = "green";
            losses++;
        }
        setTimeout(colorReset, 1000);
        updateScreen();
    });

    scissorsBtn.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        if (computerChoice === "Rock") {
            scissorsBtn.style.backgroundColor = "red";
            rockBtn.style.backgroundColor = "green";
            losses++;
        } else if (computerChoice === "Paper") {
            scissorsBtn.style.backgroundColor = "green";
            paperBtn.style.backgroundColor = "red";
            wins++;
        } else {
            scissorsBtn.style.backgroundColor = "yellow";
            ties++;
        }
        setTimeout(colorReset, 1000);
        updateScreen();
    });

    // update all of them on screen
    const winsEl = document.querySelector(".wins .score");
    const lossesEl = document.querySelector(".losses .score");
    const tiesEl = document.querySelector(".ties .score");

    function updateScreen() {
        winsEl.textContent = wins;
        lossesEl.textContent = losses;
        tiesEl.textContent = ties;
    }
});
