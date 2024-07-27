console.log("Hello World");

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    }
    if (randomNum === 1) {
        return "paper";
    }
    if (randomNum === 2) {
        return "scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Please enter 'rock', 'paper', or 'scissors'");
    let humanChoice = userInput.trim();
    if (humanChoice === "rock" || 
        humanChoice === "paper" || 
        humanChoice === "scissors") {
        return humanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;
let ties = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
        ties++;
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beat paper");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper");
            humanScore++;
        }
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log("Ties: " + ties);
}

console.log(playGame());