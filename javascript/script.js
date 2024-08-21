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

    case (humanChoice == 'paper' && computerChoice == 'paper'):
      console.log('No one won. Paper and paper is a tie.')
      break;

    case (humanChoice == 'paper' && computerChoice == 'scissors'):
      console.log('You lose! Scissors beats Paper.');
      computerScore++;
      break;

    case (humanChoice == 'scissors' && computerChoice == 'rock'):
      console.log('You lose! Rock beats Scissors.');
      computerScore++;
      break;

    case (humanChoice == 'scissors' && computerChoice == 'paper'):
      console.log('You win! Scissors beats Paper.');
      humanScore++;
      break;
    
    case (humanChoice == 'scissors' && computerChoice == 'scissors'):
      console.log('No one won. Scissors and scissors is a tie.');
      break;
  }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultBox = document.querySelector('.result-box');