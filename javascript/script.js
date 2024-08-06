function random(number) {
  return Math.floor((Math.random() * number) + 1)
}

function getComputerChoice() {
  let computerChoice = random(3);
  if (computerChoice == 1) {
    return "rock"
  } else if (computerChoice == 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Choose a move: (Rock, Paper or Scissors)');
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == 'rock') {
    return 'rock'
  } else if (humanChoice == 'paper') {
    return 'paper'
  } else if (humanChoice == 'scissors') {
    return 'scissors'
  }
}

let humanScore = 0;
let computerScore = 0;