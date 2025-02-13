document.addEventListener("DOMContentLoaded", function () {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");

    const compRockBtn = document.querySelector(".with-text-computer .rock");
    const compPaperBtn = document.querySelector(".with-text-computer .paper");
    const compScissorsBtn = document.querySelector(".with-text-computer .scissors");

    let wins = 0;
    let losses = 0;
    let ties = 0;

    function getComputerChoice() {
        let choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function resetColors() {
        [rockBtn, paperBtn, scissorsBtn, compRockBtn, compPaperBtn, compScissorsBtn].forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.outline = "";
        });
    }

    function animateComputerChoice(finalChoice, userChoice) {
        let choices = [compRockBtn, compPaperBtn, compScissorsBtn];
        let index = 0;
        let cycleCount = 0;
        let maxCycles = 20; // Controls how long the animation runs
        let intervalTime = 200; // Starting speed
        let minInterval = 50; // Fastest it gets
        let slowdownFactor = 1.1; // Factor by which it slows down
        let currentInterval;

        function cycle() {
            if (cycleCount >= maxCycles) {
                clearInterval(currentInterval);
                finalizeChoice(finalChoice, userChoice);
                return;
            }

            // Remove outline from all
            choices.forEach(btn => btn.style.outline = "none");

            // Apply outline to current choice
            choices[index].style.outline = "3px solid blue";

            // Move to the next choice
            index = (index + 1) % choices.length;
            cycleCount++;

            // Adjust speed: first it speeds up, then slows down
            if (intervalTime > minInterval) {
                intervalTime = Math.max(minInterval, intervalTime * 0.9); // Speeds up
            } else if (cycleCount > maxCycles / 2) {
                intervalTime *= slowdownFactor; // Slows down
            }

            currentInterval = setTimeout(cycle, intervalTime);
        }

        cycle(); // Start cycling
    }

    function finalizeChoice(computerChoice, userChoice) {
        // Remove all outlines
        [compRockBtn, compPaperBtn, compScissorsBtn].forEach(btn => btn.style.outline = "none");

        let computerBtn;
        if (computerChoice === "Rock") computerBtn = compRockBtn;
        else if (computerChoice === "Paper") computerBtn = compPaperBtn;
        else computerBtn = compScissorsBtn;

        let userBtn;
        if (userChoice === "Rock") userBtn = rockBtn;
        else if (userChoice === "Paper") userBtn = paperBtn;
        else userBtn = scissorsBtn;

        // Apply outline to final computer choice
        computerBtn.style.outline = "3px solid blue";

        // Determine result
        if (userChoice === computerChoice) {
            userBtn.style.backgroundColor = "yellow";
            computerBtn.style.backgroundColor = "yellow";
            ties++;
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            userBtn.style.backgroundColor = "green";
            computerBtn.style.backgroundColor = "red";
            wins++;
        } else {
            userBtn.style.backgroundColor = "red";
            computerBtn.style.backgroundColor = "green";
            losses++;
        }

        updateScreen();
        setTimeout(resetColors, 1000);
    }

    function handleUserClick(userChoice) {
        resetColors(); // Clear previous selections

        let computerChoice = getComputerChoice();
        let userBtn;
        if (userChoice === "Rock") userBtn = rockBtn;
        else if (userChoice === "Paper") userBtn = paperBtn;
        else userBtn = scissorsBtn;

        userBtn.style.outline = "3px solid blue"; // Temporary outline for user
        animateComputerChoice(computerChoice, userChoice);
    }

    rockBtn.addEventListener("click", () => handleUserClick("Rock"));
    paperBtn.addEventListener("click", () => handleUserClick("Paper"));
    scissorsBtn.addEventListener("click", () => handleUserClick("Scissors"));

    const winsEl = document.querySelector(".wins .score");
    const lossesEl = document.querySelector(".losses .score");
    const tiesEl = document.querySelector(".ties .score");

    function updateScreen() {
        winsEl.textContent = wins;
        lossesEl.textContent = losses;
        tiesEl.textContent = ties;
    }
});
