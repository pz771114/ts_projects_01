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
  }
}
