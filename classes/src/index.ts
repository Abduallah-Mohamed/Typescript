// class Player {
//   public readonly first: string;
//   readonly last: string;
//   private score = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod();
//   }

//   private secretMethod(): void {
//     console.log("secret method");
//   }
// }

class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("secret method");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  isAdmin = true;
  maxScore() {
    this._score = 909090;
  }
}

class AdminPlayer extends SuperPlayer {
  thisIsAdmin = true;
  maxIsHere() {
    this._score = 32423432;
  }
  // this._score = 234324;
}

interface ColorFull {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements ColorFull, Printable {
  constructor(public color: string) {}
  print(): void {
    console.log("print");
  }
}

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("move");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("bark");
  }
}

abstract class Employee {
  constructor(public full: string, public age: number) {}
  abstract printInfo(): void;
  abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
  printInfo() {
    console.log(`${this.full} is ${this.age} years old`);
  }
  getPay() {
    return this.age * 10;
  }
}

class PartTimeEmployee extends Employee {
  printInfo() {
    console.log(`${this.full} is ${this.age} years old`);
  }
  getPay() {
    return this.age * 5;
  }
}

const newPlayer = new Player("John", "Doe", 100);

// newPlayer.score = 100;
// newPlayer.secretMethod();
// newPlayer.first = "mohamed"; //read only
newPlayer.fullName;
newPlayer.score;
newPlayer.score = -100;
// newPlayer.fullName = "mohamed"; //read only

const h = new AdminPlayer("mohamed", "hamed", 100);

h.maxIsHere();

const b = new Dog();

let t = new FullTimeEmployee("mohamed", 20);
