import Player from "./player.js";
import { politicians, folk } from "../data/data.js";

export default class Lottery {
  constructor(people) {
    this.people = people;
    this.players = [];
    this.winningCombination = [];
  }
  getLotteryNumbers() {
    let lotteryNumbers = [];

    while (lotteryNumbers.length < 4) {
      let x = Math.floor(Math.random() * 7) + 1;

      if (!lotteryNumbers.includes(x)) {
        lotteryNumbers.push(x);
      }
    }
    lotteryNumbers.sort();

    return lotteryNumbers;
  }
  generatePlayers() {
    this.people.map((person) => {
      const player = new Player(
        person.name,
        person.surname,
        this.getLotteryNumbers()
      );

      this.players.push(player);
    });
  }

  getWinningCombination() {
    this.winningCombination = this.getLotteryNumbers();
  }

  startDrawing() {
    this.generatePlayers();
    this.getWinningCombination();

    const winners = this.players.filter((player) =>
      player.lotteryNumbers.every(
        (val, index) => val === this.winningCombination[index]
      )
    );

    console.log(winners);
  }
}
