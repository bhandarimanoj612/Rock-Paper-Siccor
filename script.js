const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let computerChoice;
let userChoice;
let result;
possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; //or use possibleChoice.length;

  if (randomNumber === 1) {
    computerChoice = " rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === userChoice) {
    result = "Its draw! ";
  }
  if (computerChoice === "rock" && userChoice == "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice == "scissor") {
    result = "You lost!";
  }
  if (computerChoice === "paper" && userChoice == "rock") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice == "scissor") {
    result = "You win!";
  }
  if (computerChoice === "scissors" && userChoice == "rock") {
    result = "You win!";
  }
  if (computerChoice === "scissor" && userChoice == " paper") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}
