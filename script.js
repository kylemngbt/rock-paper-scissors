function getComputerChoice(){
    return Math.floor((Math.random() * 3) + 1);
}

function turnNumberToString(value){
    if (value === 1) {
        return 'rock';
    } 
    else if (value === 2){
        return 'paper';
    } 
    else if (value === 3){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    computerSelection = turnNumberToString(computerSelection);
    console.log(computerSelection);
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("You lost! The computer chose Paper. \n Paper beats Rock");  
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("You win! The computer chose Scissors. \n Rock beats Scissors");
    } else if (playerSelection === 'rock' && computerSelection === 'rock'){
        console.log("Draw! The computer chose Rock. \n Rock and Rock are friends");
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
game();


