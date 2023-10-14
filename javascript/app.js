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

function playPaper() {
  computerSelection = getComputerChoice();
    if (computerSelection === "rock") {
      playerScore += 1;
      result.textContent = "The computer chose Rock. You win."
    } else if (computerSelection === "paper") {
      result.textContent = "The computer chose Paper. It's a tie."
    } else if (computerSelection === "scissors") {
      computerScore += 1;
      result.textContent = "The computer chose Scissors. You lose."
    }
}

function playScissors() {
  computerSelection = getComputerChoice();
    if (computerSelection === "rock") {
      computerScore += 1;
      result.textContent = "The computer chose Rock. You lose."
    } else if (computerSelection === "paper") {
      playerScore += 1;
      result.textContent = "The computer chose Paper. You win."
    } else if (computerSelection === "scissors") {
      result.textContent = "The computer chose Scissors. It's a tie."
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('.result');
const resultBox = document.querySelector('.resultBox');
const scoreBox = document.querySelector('.scoreBox');
const playerScoreResult = document.querySelector('.playerScore');
const computerScoreResult = document.querySelector('.computerScore');

function checkScore() {
  if (playerScore === 5) {
    result.textContent = 'Game over. The player won the game by 5 points!'
    rock.removeEventListener('click', gameRock);
    paper.removeEventListener('click', gamePaper);
    scissors.removeEventListener('click', gameScissors);
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play again';
    scoreBox.appendChild(playAgainButton);
  } else if (computerScore === 5) {
    result.textContent = 'Game over. The computer won the game by 5 points!'
    rock.removeEventListener('click', gameRock);
    paper.removeEventListener('click', gamePaper);
    scissors.removeEventListener('click', gameScissors);
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play again';
    scoreBox.appendChild(playAgainButton);
  } else {
    console.log('Continue the game.')
  }
}

function updateScore() {
  playerScoreResult.textContent = `Player Score: ${playerScore}`
  computerScoreResult.textContent = `Computer Score: ${computerScore}`
}

function gameRock() {
  playRock();
  updateScore();
  checkScore();
}

function gamePaper() {
  playPaper();
  updateScore();
  checkScore();
}

function gameScissors() {
  playScissors();
  updateScore();
  checkScore();
}

rock.addEventListener('click', gameRock);
paper.addEventListener('click', gamePaper);
scissors.addEventListener('click', gameScissors);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  result.textContent = '';
  playerScoreResult.textContent = '';
  computerScoreResult.textContent = '';
  rock.addEventListener('click', gameRock);
  paper.addEventListener('click', gamePaper);
  scissors.addEventListener('click', gameScissors);
  playAgainButton.remove();
  
}





