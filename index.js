const resultEl = document.querySelector("#result-el");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const startBtn = document.querySelector("#start-btn");
const playerEl = document.querySelector("#player-el");
const computerEl = document.querySelector("#computer-el");
const btnEl = document.querySelectorAll("#btn-el");
isAlive = false;
haveWon = false;

startBtn.addEventListener("click", function () {
  isAlive = true;
  resultEl.textContent = "Choose your hand!";

  btnEl.forEach((button) => {
    button.addEventListener("click", function () {
      if (isAlive === true) {
        const playerChoice = this.textContent;
        const computerChoice = random();
        const result = resultOfChoice(playerChoice, computerChoice);

        playerEl.textContent = `You chose: ${playerChoice}`;
        computerEl.textContent = `Computer choose: ${computerChoice}`;
        resultEl.textContent = result; //her we used return in our conditionals so we are calling this cont result to update the our message
        scoreUpdate(result);
      }
    });
  });
});

function scoreUpdate(result) {
  if (result === "You Won") {
      const current = parseInt(playerScore.textContent.split(":")[1]);
      playerScore.innerHTML = `You: <span class="player" id="player-score">${current + 1}</span>`;
  } else if (result === "You lost") {
      const current = parseInt(computerScore.textContent.split(":")[1]);
      computerScore.innerHTML = `Computer: <span class="computer" id="computer-score">${current + 1}</span>`;
  }
}

function resultOfChoice(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw";
  } else if (
    (playerChoice === "👊🏻" && computerChoice === "✌🏻") ||
    (playerChoice === "🖐🏻" && computerChoice === "👊🏻") ||
    (playerChoice === "✌🏻" && computerChoice === "🖐🏻")
  ) {
    haveWon = true;
    return "You Won";
  } else {
    haveWon = false;
    return "You lost";
  }
}

function random() {
  const choices = ["👊🏻", "🖐🏻", "✌🏻"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
