const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const output = document.getElementById("output");
const playerScoreText = document.getElementById("player-score-text");
const computerScoreText = document.getElementById("computer-score-text");

let computerScore = 0;
let playerScore = 0;

rock.onclick = controlHandler;
paper.onclick = controlHandler;
scissors.onclick = controlHandler;

function controlHandler(e) {
  const playerSelection = e.target.id;
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  console.log(playerSelection, computerSelection);
  if (playerSelection === "rock" && computerSelection === "rock") {
    output.innerHTML = `<h2>Both chose rock, draw</h2>`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    output.innerHTML = `<h2>rock beaten by paper, computer win</h2h`;
    computerScore++;
    computerScoreText.innerText = computerScore;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    output.innerHTML = `<h2>rock beaten scissors, player wins</h2>`;
    playerScore++;
    playerScoreText.innerText = playerScore;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    output.innerHTML = `<h2>Both chose paper, draw</h2>`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    output.innerHTML = `<h2>paper beaten rock, player wins</h2>`;
    playerScore++;
    playerScoreText.innerText = playerScore;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    output.innerHTML = `<h2>paper beaten by scissors, computer wins</h2>`;
    computerScore++;
    computerScoreText.innerText = computerScore;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    output.innerHTML = `<h2>Both chose scissors, draw</h2>`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    output.innerHTML = `<h2>scissors beaten by rock, computer wins</h2>`;
    computerScore++;
    computerScoreText.innerText = computerScore;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    output.innerHTML = `<h2>scissors beaten paper, player wins</h2>`;
    playerScore++;
    playerScoreText.innerText = playerScore;
  }
  if (playerScore === 3) {
    output.innerText = "you won the game"
    document.getElementById('controls').style.display = "none";
  }
  else if (computerScore === 3) {
    output.innerText = "computer won the game"
    document.getElementById("controls").style.display = "none";
    
  }
}
