function hi(t: number) {
  return t * t;
}

const doSomething = (
  userName: string,
  age: number,
  isFunny: boolean
): string => {
  return `${userName} is ${age} years old and is ${
    isFunny ? "funny" : "not funny"
  }`;
};

const great = (persong: string = "stranger"): string => {
  return `Hello ${persong}`;
};

const addNums = (a: number, b: number): number => {
  return a + b;
};

function ran(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }

  return { num };
}

const colors = ["red", "green", "blue"];
colors.map((color) => {
  return color;
});

function helloFrom(s: string): void {
  console.log(s);
}

function errorMessage(msg): never {
  throw new Error(msg);
}

console.log(hi(55));

console.log(doSomething("John", 30, true));

console.log(great());

console.log(great("John"));

console.log(addNums(5, 6));

console.log(ran(5));

errorMessage("This is an error");

export {};
