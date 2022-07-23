"use strict";
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("secret method");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 909090;
    }
}
class AdminPlayer extends SuperPlayer {
    constructor() {
        super(...arguments);
        this.thisIsAdmin = true;
        // this._score = 234324;
    }
    maxIsHere() {
        this._score = 32423432;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
    print() {
        console.log("print");
    }
}
class Animal {
    move() {
        console.log("move");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("bark");
    }
}
class Employee {
    constructor(full, age) {
        this.full = full;
        this.age = age;
    }
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
