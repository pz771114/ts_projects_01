import Item from "./Item";
import Snake from "./Snake";
import Status from "./Status";

class Game {
  //game properties

  gamePlayer: Snake;
  gameItem: Item;
  gameStatus: Status;

  direction: string;
  isGameOver: boolean;

  constructor() {
    this.gamePlayer = new Snake();
    this.gameItem = new Item("item");
    //new Item("potion"), new Item("jewel")

    this.gameStatus = new Status();

    this.direction = "";
    this.isGameOver = false;

    this.control();
  }

  control() {
    document.addEventListener("keydown", this.keydownHandler);
  }

  keydownHandler = (event: KeyboardEvent): void => {
    //console.log("key pressed:", event.key);

    this.direction = event.key;

    !this.isGameOver && this.play();
  };

  play() {
    try {
      switch (this.direction) {
        case "ArrowLeft":
          this.gamePlayer.X -= 10;
          break;
        case "ArrowRight":
          this.gamePlayer.X += 10;
          break;
        case "ArrowUp":
          this.gamePlayer.Y -= 10;
          break;
        case "ArrowDown":
          this.gamePlayer.Y += 10;
          break;
      }
      console.log(
        this.gamePlayer.X,
        this.gamePlayer.Y,
        this.gameItem.X,
        this.gameItem.Y
      );
    } catch (error) {
      this.isGameOver = true;
      alert("Game is over!");
    }
    this.collidesWithItem(this.gamePlayer.X, this.gamePlayer.Y);
  }
  collidesWithItem(playerPositionX: number, playerPositionY: number) {
    if (
      this.gameItem.X === playerPositionX &&
      this.gameItem.Y === playerPositionY
    ) {
      console.log("player collides with item");
      this.gameItem.updatePosition();

      this.gameStatus.increaseScore();

      this.gamePlayer.addBodyBlock();
    }
  }
}

export default Game;
