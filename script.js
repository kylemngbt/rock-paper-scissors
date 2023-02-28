function getComputerChoice(){
    return Math.floor((Math.random() * 3) + 1);
}

function playRound(playerSelection, computerSelection){
    console.log("Proceed to game.");
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

