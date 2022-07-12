let age: number | string = 10;
age = "10";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lang: number;
};

let coordinates: Point | Loc = { x: 10, y: 20 };
coordinates = { lat: 312.55, lang: 20.36 };

function printAge(age: number | string): void {
  console.log(`you are ${age} years old`);
}

printAge(age);
printAge("10");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

console.log(calculateTax(34430, 0.1));
console.log(calculateTax("$5434", 0.1));

// array of union types (number | string)
let items: (number | string)[][] = [
  [1, 2, "3"],
  ["a", "b", "c"],
];
console.log(items.length);

// array of strings only OR array of numbers only
// let items2: string[] | number[] = [1, "2", 3, "4"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 10, lang: 20 });
coords.push({ x: 10, y: 20 });

console.log(coords);

// letrial type
let zero: 0 = 0;
let mood: "happy" | "sad" | "angry" = "happy";
mood = "sad";
mood = "angry";

type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"
  | 0;

let today: DayOfWeek = 0;

console.log(today);

export {};
