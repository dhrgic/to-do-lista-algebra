import Lottery from "./modules/lottery.js";
import Player from "./modules/player.js";
import { politicians, folk } from "./data/data.js";
const buttonStartLotteryEl = document.querySelector(".button-start-lottery");
const lotteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winningMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

const lottery = new Lottery(politicians);

buttonStartLotteryEl.addEventListener("click", function () {
  buttonStartLotteryEl.disabled = true;
  buttonStartLotteryEl.innerText = "Lottery drawing in progress";

  lottery
    .startDrawing()
    .then((result) => {
      winnersEl.display = "block";
      winningCombinationEl.innerText = `Winning combination is: ${result.winningCombination}`;
      winningMessageEl.innerText = `Winners:`;

      let winnersList = ``;
      result.winners.forEach((winner) => `<li>${winner.getPlayerDetails()}`);
      winnersEl.innerHTML = winnersList;
    })
    .catch((result) => {
      winnersEl.display = "none";
      winningCombinationEl.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerHTML = "There are no winners!";
    })
    .finally(() => {
      buttonStartLotteryEl.disabled = false;
      buttonStartLotteryEl.innerText = "Start lottery drawing";
    });
});
