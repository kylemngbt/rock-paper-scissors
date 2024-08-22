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

function playRound() {
  let humanChoice = this.id;
  let computerChoice = getComputerChoice();
  switch (true) {
    case (humanChoice == 'rock' && computerChoice == 'rock'):
      resultBox.textContent = 'No one won. Rock and rock is a tie.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;
    
    case (humanChoice == 'rock' && computerChoice == 'paper'):
      computerScore++;
      resultBox.textContent = 'You lose! Paper beats Rock.'
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;

    case (humanChoice == 'rock' && computerChoice == 'scissors'):
      humanScore++;
      resultBox.textContent = 'You win! Rock beats Scissors.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;

    case (humanChoice == 'paper' && computerChoice == 'rock'):
      humanScore++;
      resultBox.textContent = 'You win! Paper beats Rock.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;

    case (humanChoice == 'paper' && computerChoice == 'paper'):
      resultBox.textContent = 'No one won. Paper and paper is a tie.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;

    case (humanChoice == 'paper' && computerChoice == 'scissors'):
      computerScore++;
      resultBox.textContent = 'You lose! Scissors beats Paper.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;

    case (humanChoice == 'scissors' && computerChoice == 'rock'):
      computerScore++;
      resultBox.textContent = 'You lose! Rock beats Scissors.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;

    case (humanChoice == 'scissors' && computerChoice == 'paper'):
      humanScore++;
      resultBox.textContent = 'You win! Scissors beats Paper.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;
    
    case (humanChoice == 'scissors' && computerChoice == 'scissors'):
      resultBox.textContent = 'No one won. Scissors and scissors is a tie.';
      humanScoreBox.textContent = `Your score: ${humanScore}`;
      computerScoreBox.textContent = `Computer Score: ${computerScore}`;
      break;
  }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultBox = document.querySelector('.result-box');
const humanScoreBox = document.querySelector('.human-score-box');
const computerScoreBox = document.querySelector('.computer-score-box');
let humanScore = 0;
let computerScore = 0;