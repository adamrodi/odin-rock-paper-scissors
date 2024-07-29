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
        resultContainer.textContent = `It's a tie!    
        Your score: ${humanScore}
        Computer score: ${computerScore}
        Ties: ${++ties}`;
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            resultContainer.textContent = `You lose! Paper beats rock
            Your score: ${humanScore}
            Computer score: ${++computerScore}
            Ties: ${ties}`;
        }
        else if (computerChoice === "scissors") {
            resultContainer.textContent = `You win! Rock beats scissors
            Your score: ${++humanScore}
            Computer score: ${computerScore}
            Ties: ${ties}`;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            resultContainer.textContent = `You win! Paper beats rock
            Your score: ${++humanScore}
            Computer score: ${computerScore}
            Ties: ${ties}`;
        }
        else if (computerChoice === "scissors") {
            resultContainer.textContent = `You lose! Scissors beat paper
            Your score: ${humanScore}
            Computer score: ${++computerScore}
            Ties: ${ties}`;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            resultContainer.textContent = `You lose! Rock beats scissors
            Your score: ${humanScore}
            Computer score: ${++computerScore}
            Ties: ${ties}`;
        }
        else if (computerChoice === "paper") {
            resultContainer.textContent = `You win! Scissors beat paper
            Your score: ${++humanScore}
            Computer score: ${computerScore}
            Ties: ${ties}`;
        }
    }
    if (computerScore === 5){
        gameOverContainer.textContent = `Computer wins!
        Womp Womp!`;
    }
    else if (humanScore === 5){
        gameOverContainer.textContent = `You win!
        Woohoo!`;
    }
}
/*
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
*/

const body = document.querySelector("body");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const resultContainer = document.createElement("div");
const gameOverContainer = document.createElement("div");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);
body.appendChild(resultContainer);
body.appendChild(gameOverContainer);

body.addEventListener("click", (e) =>{

    let target = e.target.textContent;

    switch (target){
        case 'Rock':
            console.log("rockButton clicked");
            playRound("rock", getComputerChoice());
            break;

        case 'Paper':
            console.log("paper clicked");
            playRound("paper", getComputerChoice());
            break;

        case 'Scissors':
            console.log("scis clicked");
            playRound("scissors", getComputerChoice());
            break;
    }
    
});
