type Circle = {
  radius: number;
};

type Color = {
  color: string;
};

type CircleWithColor = Circle & Color;

const happyFace: CircleWithColor = { radius: 5, color: "yellow" };

console.log(happyFace as CircleWithColor);

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type Animal = Cat & Dog & { age: number };

const animal: Animal = { numLives: 9, breed: "labrador", age: 2 };
console.log(animal);
