class Person {
  static desc = "this is a static desc for every instance of the class";

  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullname() {
    return `${this.first} ${this.last}`;
  }

  // set fullname(newName) {
  //   const [first, last] = newName.split(" ");
  //   this.first = first;
  //   this.last = last;
  // }
  static randomPerson() {
    return new Person("John", "Doe");
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) throw new Error("Score cannot be negative");
    this.#score = newScore;
  }

  // getScore() {
  //   return this.#score;
  // }
  setScore(s) {
    return (this.#score = s);
  }
  thisIsAMethodHere() {
    console.log(`hello from the other side`);
  }
  loselife() {
    this.#numLives--;
  }
  #secretMethod() {
    console.log(`secret method`);
  }
}

class AdminPerson extends Person {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPerson("John", "Doe", ["super", "power"]);

const person1 = new Person("abdo", "mohamed");
const person2 = new Person("hello", "from");

console.log(person1);
console.log(person2);
console.log(person1.first, person1.last);

person1.thisIsAMethodHere();
person2.thisIsAMethodHere();

person1.loselife();

// console.log(person1.getScore());
// console.log(person1.setScore(10));
// console.log(person1.getScore());
console.log(person1);

console.log(person1.score);
// console.log((person1.score = -234324));
console.log(person1.score);
// console.log(person1.#secretMethod()); // error
console.log(person1.fullname);

console.log(person1.fullname);
person1.fullname = "abdo mohamed";
console.log(person1.fullname);
