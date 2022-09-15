class Status {
  private _scoreElement: HTMLElement;
  private _levelElement: HTMLElement;

  private _scoreValue: number = 0;
  private _levelValue: number = 1;

  constructor() {
    this._scoreElement = document.querySelector("#score")!;
    this._levelElement = document.querySelector("#level")!;

    this._scoreElement.innerHTML = this._scoreValue.toString();
    this._levelElement.innerHTML = this._levelValue.toString();
  }

  increaseScore() {
    this._scoreValue++; //this._scoreValue = this._scoreValue+1;
    //display the score
    this._scoreElement.innerHTML = this._scoreValue.toString();

    if (this._scoreValue % 5 == 0) {
      this.increaseLevel();
    }
  }

  increaseLevel() {
    this._levelValue++; //this._levelValue = this._levelValue+1;
    //display the level
    this._levelElement.innerHTML = this._levelValue.toString();
  }
}

/*
  const status1 = new Status();
  
  for (let i = 1; i < 11; i++) {
    status1.increaseScore();
  }
  */

export default Status;
