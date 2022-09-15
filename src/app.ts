import Item from "./modules/Item";
import Status from "./modules/Status";

const item1 = new Item("item");
item1.updatePosition();
console.log(item1.X, item1.Y);

const status1 = new Status();

for (let i = 1; i < 11; i++) {
  status1.increaseScore();
}
