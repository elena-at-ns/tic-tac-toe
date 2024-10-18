export class Logic {
  gamefield: Array<number> = [];
  currentPlayer: number = 1;
  gameStatus: string = "";

  public constructor() {
    this.gameStatus;
    this.gamefield = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  gameStart(): void {
    this.gamefield = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentPlayer = 1;
    this.gameStatus = "start";
  }
}
