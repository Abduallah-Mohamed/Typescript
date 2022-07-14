interface Point {
  x: number;
  y: number;
}

interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  nickName?: string; // ? means optional
  sayHi: () => string; // function signature
  stayAwake(): string; // another function signature
  applyDiscount(discount: number): number;
}

const obj: Person = {
  id: 1,
  firstName: "John",
  lastName: "hardy",
  nickName: "mohsen",
  sayHi: () => "hello",
  stayAwake: () => "good morning",
  applyDiscount: (discount: number) => discount * 2,
};

obj.firstName = "farouq";
// obj.id = 2; // I can not edit read only property

const pt: Point = { x: 1, y: 2 };

console.log(pt);

interface Product {
  name: string;
  price: number;
  getPriceWithTax(tax: number): number;
  applyDiscount(discount: number): number;
}

const product: Product = {
  name: "apple",
  price: 10,
  getPriceWithTax: (tax: number) => tax * product.price,
  applyDiscount: (discount: number) => {
    const newPrice = discount * product.price;
    product.price = newPrice;
    return product.price;
  },
};

console.log(product.getPriceWithTax(0.1));
console.log(product.applyDiscount(product.price));
console.log(product.price);

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const dog: Dog = {
  name: "mohsen",
  age: 2,
  breed: "poodle",
  bark: () => "woof",
};

interface ServiceDog extends Dog {
  job: "Drug Sniffer" | "Dog Walker" | "bomb";
}

console.log(dog);
console.log(dog.bark());

const serviceDog: ServiceDog = {
  name: "mohsen",
  age: 2,
  breed: "poodle",
  bark: () => "woof",
  job: "Drug Sniffer",
};

console.log(serviceDog);

// multiple inheritance
interface human {
  name: string;
}

interface Employee {
  readonly id: number;
  salary: number;
}

interface Engineer extends human, Employee {
  level: string;
  language: string[];
}

const abduallah: Engineer = {
  name: "abduallah",
  id: 1,
  salary: 1000,
  level: "junior",
  language: ["typescript", "javascript"],
};

export {};
