let humanScore = 0;
let computerScore = 0;

const rockbtn = document.createElement("button");
const scissorbtn = document.createElement("button");
const paperbtn = document.createElement("button");

rockbtn.textContent = "Rock";
scissorbtn.textContent = "Scissors";
paperbtn.textContent = "Paper";

document.body.appendChild(rockbtn);
document.body.appendChild(scissorbtn);
document.body.appendChild(paperbtn);

rockbtn.addEventListener("click", function() {
  playRound("rock", getComputerChoice());
});

scissorbtn.addEventListener("click", function() {
  playRound("scissors", getComputerChoice());
});

paperbtn.addEventListener("click", function() {
  playRound("paper", getComputerChoice());
});

const result = document.createElement("div");
document.body.appendChild(result);

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

function playRound(humanChoice, computerchoice) {
  const computerAnswer = document.createElement("p");
  computerAnswer.textContent = "Computer chose: " + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1) + ".";
  result.appendChild(computerAnswer);
  const points = document.createElement("p");
  result.appendChild(points);
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerchoice) {
    points.textContent = "Draw! No points to anyone. Score: Human " + humanScore + " Computer " + computerScore;
  } else if ((humanChoice === "rock" && computerchoice === "scissors") || (humanChoice === "paper" && computerchoice === "rock") || (humanChoice === "scissors" && computerchoice === "paper")) {
    humanScore++;
    points.textContent = "One Point to Human! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1) + ". Score: Human " + humanScore + " Computer " + computerScore;
  } else {
    computerScore++;
    points.textContent = "One Point to Computer! " + computerchoice.charAt(0).toUpperCase() + computerchoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ". Score: Human " + humanScore + " Computer " + computerScore;
  }

  if(humanScore === 5 || computerScore === 5){
    rockbtn.disabled = true;
    scissorbtn.disabled = true;
    paperbtn.disabled = true;
  }

  if(humanScore === 5){
    result.textContent = "Human wins!";
  } else if(computerScore === 5){
    result.textContent = "Computer wins!";
  }
}