function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomNumber) {
    case 1:
    return 'rock';
    break;

    case 2:
    return 'paper';
    break;

    case 3:
    return 'scissors';
    break;
  }
}

let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRock() {
  computerSelection = getComputerChoice();
    if (computerSelection === "rock") {
      result.textContent = 'The computer chose Rock. It\'s a tie.'
    } else if (computerSelection === "paper") {
      computerScore += 1;
      result.textContent = 'The computer chose Paper. You lose.'
    } else if (computerSelection === "scissors") {
      playerScore += 1;
      result.textContent = 'The computer chose Scissors. You win.'
    }
}

const rock = document.querySelector('#rock');
const result = document.querySelector('.result');
const resultBox = document.querySelector('.resultBox');
const playerScoreResult = document.querySelector('.playerScore');
const computerScoreResult = document.querySelector('.computerScore');