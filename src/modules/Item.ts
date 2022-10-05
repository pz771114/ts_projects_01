class Item {
  private _element: HTMLElement;
  private _moveDistance: number = 10;
  private _randomSeed: number = 28;

  constructor(elementId: string) {
    this._element = document.querySelector(`#${elementId}`)!;
  }

  get X(): number {
    return this._element.offsetLeft;
  }

  get Y(): number {
    return this._element.offsetTop;
  }

  updatePosition() {
    let randomLeft =
      Math.round(Math.random() * this._randomSeed) * this._moveDistance;
    let randomTop =
      Math.round(Math.random() * this._randomSeed) * this._moveDistance;

    this._element.style.left = randomLeft + "px";
    this._element.style.top = randomTop + "px";
  }
}

/*
const item1 = new Item("item");
item1.updatePosition();
console.log(item1.X, item1.Y);
*/

export default Item;
