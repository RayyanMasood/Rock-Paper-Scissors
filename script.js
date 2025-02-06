function getComputerChoice(){
    let rand = Math.floor(Math.random() * 4); // 0 to 3

    if (rand === 1) {
        return "Rock";
    } else if (rand === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    let pToLower = playerSelection.toLowerCase();
    let cToLower = computerSelection.toLowerCase();
    if (pToLower === cToLower) {
        return "Same choice, tie"
    } else if (pToLower === "rock" && cToLower === "scissors") {
        return "Player wins!"
    } else if (pToLower === "scissors" && cToLower === "rock") {
        return "Computer wins!"
    } else if (pToLower === "paper" && cToLower === "rock") {
        return "Player wins!"
    } else if (pToLower === "rock" && cToLower === "paper") {
        return "Computer wins!"
    } else if (pToLower === "scissors" && cToLower === "paper") {
        return "Player wins!"
    } else if (pToLower === "paper" && cToLower === "scissors") {
        return "Computer wins!"
    } else {
        return "Invalid input"
    }
}   

function playGame() {
    let score = 0;
    
        // if (result === "Player wins!") {
        //     score++;
        // } else if (result === "Computer wins!") {
        //     score--;
        // }
        console.log(result);
        // console.log(score);

        // if (score < 0) {
        //     score = 0;
        //     console.log("You lost the game!");
        //     break;
        // }
    }
}
  
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

playGame();
