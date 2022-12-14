class Snake {
  body: HTMLCollection;
  head: HTMLElement;

  private _minX: number = 0;
  private _maxX: number = 280;
  private _minY: number = 0;
  private _maxY: number = 280;

  constructor() {
    this.body = document.getElementById("snake")!.getElementsByTagName("div");
    this.head = this.body[0] as HTMLElement;
  }

  get X(): number {
    return this.head.offsetLeft;
  }

  get Y(): number {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (value < this._minX || value > this._maxX) {
      throw new Error("Out of boundary");
    }
    this.move();
    this.head.style.left = value + "px";
  }

  set Y(value: number) {
    if (value < this._minY || value > this._maxY) {
      throw new Error("Out of boundary");
    }
    this.move();
    this.head.style.top = value + "px";
  }

  addBodyBlock() {
    document
      .getElementById("snake")!
      .insertAdjacentHTML("beforeend", "<div class='notShow'></div>");
  }

  move() {
    for (let i = this.body.length - 1; i > 0; i--) {
      //current position equals to the position of previous block

      let tempPositionX = (this.body[i - 1] as HTMLElement).offsetLeft;
      let tempPositionY = (this.body[i - 1] as HTMLElement).offsetTop;

      (this.body[i] as HTMLElement).style.left = tempPositionX + "px";
      (this.body[i] as HTMLElement).style.top = tempPositionY + "px";

      if (this.body[i].classList.contains("notShow")) {
        this.body[i].classList.remove("notShow");
      }
    }
  }
}

export default Snake;
