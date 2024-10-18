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

  setField(position: number, value: number): void {
    this.gamefield[position] = value;
  }

  getPlayerColor(): string {
    const colorClass = this.currentPlayer === 1 ? "player-one" : "player-two";
    return colorClass;
  }

  changePlayer(): void {
    this.currentPlayer = this.currentPlayer === 2 ? 1 : 2;
  }
}
