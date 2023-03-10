function getComputerChoice(){
    computerMove = Math.floor((Math.random() * 3) + 1);
    if (computerMove === 1){
        return 'rock';
    }
    else if (computerMove === 2){
        return 'paper';
    }
    else if (computerMove === 3){
        return 'scissors';
    }
}

function rockResult(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return "You lost! The computer chose Paper. \n Paper beats Rock.";
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return "You win! The computer chose Scissors. \n Rock beats Scissors.";
        
    } else if (playerSelection === 'rock' && computerSelection === 'rock'){
        return "Draw! The computer chose Rock. \n Rock and Rock are friends.";
    } else {
        return
    }
}

function paperResult(playerSelection, computerSelection){
    if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return "You win! The computer chose Rock. \n Paper beats Rock.";
        
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return "Draw! The computer chose Paper. \n Paper and Paper are friends.";
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return "You lost! The computer chose Scissors. \n Scissors beats Paper.";
    } else {
        return
    }
}

function scissorsResult(playerSelection, computerSelection){
    if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return "You lost! The computer chose Rock. \n Rock beats Scissors.";
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return "You won! The computer chose Paper. \n Scissors beats Paper.";
        
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "It's a draw! The computer chose Scissors. \n All scissors are friends.";
    } else {
        return
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock'){
        return rockResult(playerSelection, computerSelection);
    }
    else if (playerSelection === 'paper'){
        return paperResult(playerSelection, computerSelection);
    }
    else if (playerSelection === 'scissors'){
        return scissorsResult(playerSelection, computerSelection);
    } else {
        return
    }
}

function game(){
    
    for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose your move: ");
    playerSelection.toLowerCase();
    if (playerSelection === 'rock' || 'paper' || 'scissors') {
        console.log(playRound(playerSelection, computerSelection));
    }
    else {
        console.log("I don't recognize that move");
    }
    }
    

}
let computerSelection = getComputerChoice();
let playerSelection = 'rock';
let playerScore = 0;
let computerScore = 0;
game();
if (playerScore > computerScore) {
    alert(`You won! You scored ${playerScore} point(s) while the computer only scored ${computerScore} point(s).`)
} else if (playerScore < computerScore) {
    alert(`You lost! The computer scored ${computerScore} point(s) while you only scored ${playerScore} point(s).`)
} else if (playerScore === computerScore) {
    alert(`You tied! Both you and the computer scored ${playerScore} point(s).`)
}


