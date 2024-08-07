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

function playRound(humanChoice,computerChoice) {
  switch (true) {
    case (humanChoice == 'rock' && computerChoice == 'rock'):
      console.log('No one won. Rock and rock is a tie.');
      break;
    
    case (humanChoice == 'rock' && computerChoice == 'paper'):
      console.log('You lose! Paper beats Rock.')
      computerScore++;
      break;

    case (humanChoice == 'rock' && computerChoice == 'scissors'):
      console.log('You win! Rock beats Scissors.');
      humanScore++;
      break;

    case (humanChoice == 'paper' && computerChoice == 'rock'):
      console.log('You win! Paper beats Rock.');
      humanScore++;
      break;

    case (false):
      console.log('Not yet.')
      break;
  }
}



let humanScore = 0;
let computerScore = 0;