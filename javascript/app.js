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

function playRock() {
  let computerSelection = getComputerChoice();
    if (computerSelection === "rock") {
      return "The computer chose Rock. It's a tie."
    } else if (computerSelection === "paper") {
      return "The computer chose Paper. You lose."
    } else if (computerSelection === "scissors") {
      return "The computer chose Scissors. You win."
    }
}

const rock = document.querySelector('#rock');