function random(number) {
  return Math.floor((Math.random() * number) + 1)
}

function getComputerChoice() {
  let randomNumber = random(3);
  if (randomNumber == 1) {
    return "rock"
  } else if (randomNumber == 2) {
    return "paper"
  } else {
    return "scissors"
  }
}