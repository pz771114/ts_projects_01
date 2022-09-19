class Snake {
  body: HTMLCollection;
  head: HTMLElement;

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
    this.head.style.left = value + "px";
  }

  set Y(value: number) {
    this.head.style.top = value + "px";
  }

  addBodyBlock() {
    document
      .getElementById("snake")!
      .insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;
