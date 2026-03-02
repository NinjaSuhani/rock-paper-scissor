let choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
function playGame(userChoice) {
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomIndex];

  document.getElementById("userChoice").innerText =
    "Your choice: " + userChoice;

  document.getElementById("computerChoice").innerText =
    "Computer choice: " + computerChoice;

  if (userChoice === computerChoice) {
    document.getElementById("finalResult").innerText = "Result: Draw 😐";
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    userScore++;
    document.getElementById("finalResult").innerText = "Result: You Win 🎉";
  } else {
    computerScore++;
    document.getElementById("finalResult").innerText =
      "Result: Computer Wins 🤖";
  }

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
}
