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

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        return "You lost! The computer chose Paper. \n Paper beats Rock";
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("You win! The computer chose Scissors. \n Rock beats Scissors");
        return true;
    } else if (playerSelection === 'rock' && computerSelection === 'rock'){
        console.log("Draw! The computer chose Rock. \n Rock and Rock are friends");
        return false;
    }
}

function game(){
    
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Choose your move: ");
    if (playerSelection.toLowerCase() === 'rock' || 'paper' || 'scissors') {
        playRound(playerSelection, computerSelection);
    }
    else {
        console.log("I don't recognize that move");
    }
    }
    

}
let computerSelection = getComputerChoice();
let playerSelection = 'rock';


