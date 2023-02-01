//import { getRandomMatrix } from "../utils/random";

export class LifeMatrix {
  constructor(private _numbers: number[][]) {}
  get numbers() {
    return this._numbers;
  }
  nextStep(): number[][] {
    let resArr: number[][] = [];
    for (let i: number = 0; i < this._numbers.length; i++) {
      let previouslyRow: number = i - 1;
      let nextRow: number = i + 1;
      resArr[i] = [];
      if (nextRow == this._numbers.length) {
        nextRow = 0;
      }
      if (previouslyRow < 0) {
        previouslyRow = this._numbers.length - 1;
      }
      for (let j = 0; j < this._numbers[i].length; j++) {
        let neighb: number = 0;
        let leftNeighb: number = j - 1;
        let rightNeighb: number = j + 1;

        if (rightNeighb === this._numbers[i].length) {
          rightNeighb = 0;
        }
        if (leftNeighb < 0) {
          leftNeighb = this._numbers[i].length - 1;
        }

        if (this._numbers[i][rightNeighb] === 1) {
          neighb++;
        }
        if (this._numbers[i][leftNeighb] === 1) {
          neighb++;
        }
        neighb += this.rowConditionNeighbour(
          previouslyRow,
          j,
          rightNeighb,
          leftNeighb
        );
        neighb += this.rowConditionNeighbour(
          nextRow,
          j,
          rightNeighb,
          leftNeighb
        );

        if (this._numbers[i][j] == 1) {
          neighb === 2 || neighb === 3
            ? (resArr[i][j] = 1)
            : (resArr[i][j] = 0);
        } else {
          neighb === 3 ? (resArr[i][j] = 1) : (resArr[i][j] = 0);
        }
      }
    }
    this._numbers = resArr;
    return this._numbers;
  }
  rowConditionNeighbour(
    nRow: number,
    j: number,
    rightNeighb: number,
    leftNeighb: number
  ): number {
    let neighbour: number = 0;
    if (this._numbers[nRow][j] === 1) {
      neighbour++;
    }
    if (this._numbers[nRow][rightNeighb] === 1) {
      neighbour++;
    }
    if (this._numbers[nRow][leftNeighb] === 1) {
      neighbour++;
    }
    return neighbour;
  }
}