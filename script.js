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

// let checkFunc = getComputerChoice();

// console.log("Computer's Choice: ", checkFunc);

function playRound(playerSelection, computerSelection) {
    // your code here!
    let pToLower = playerSelection.toLowerCase();
    let cToLower = computerSelection.toLowerCase();
    if (pToLower === cToLower) {
        return "Same choice, tie"
    } else if (pToLower === "rock" && cToLower === "scissors") {
        return "Computer loses!"
    } else if (pToLower === "scissors" && cToLower === "rock") {
        
    }
}
  
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));