interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 12,
  name: "Norma",
};

type anotherType = "string" | "number";

const hh: anotherType = "string";
console.log(hh);

console.log(norma);
