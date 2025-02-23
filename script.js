let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.random(0, 3);
  if (random < 0.33) {
    console.log("rock");
    return "rock";
  } else if (random < 0.66) {
    console.log("paper");
    return "paper";
  } else {
    console.log("scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: ");
  console.log(choice);
  return choice;
}

function playRound(humanChoice, computerchoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerchoice) {
    console.log("Draw! No points to anyone.");
  } else if ((humanChoice === "rock" && computerchoice === "scissors") || (humanChoice === "paper" && computerchoice === "rock") || (humanChoice === "scissors" && computerchoice === "paper")) {
    humanScore++;
    console.log("You Win! One Point to Human. " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1) + ".");
  } else {
    computerScore++;
    console.log("You Lose! One Point to Computer. " + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".");
  }
}

function playGame() {
  for(let i=0; i<5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("Your Score: " + humanScore + ". Computer Score: " + computerScore + ".");
}

playGame();