function getComputerChoice(){
    return Math.floor((Math.random() * 3) + 1);
}

function turnNumberToString(computerSelection){
    if (computerSelection === 1) {
        return 'rock';
    } else if (string === 2){
        return 'paper';
    } else if (string === 3){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("You lost! The computer chose Paper. \n Paper beats Rock");  
    }
    return
}

function game(){
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your move: ");
    if (playerSelection.toLowerCase() === 'rock' || 'paper' || 'scissors') {
        playRound();
    }
    else {
        console.log("I don't recognize that move");
    }
    }
    

}

const computerSelection = getComputerChoice();
let playerSelection = 'rock';
game();  

