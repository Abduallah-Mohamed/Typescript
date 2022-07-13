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
}

const obj: Person = {
  id: 1,
  firstName: "John",
  lastName: "hardy",
  nickName: "mohsen",
  sayHi: () => "hello",
  stayAwake: () => "good morning",
};

obj.firstName = "farouq";
// obj.id = 2; // I can not edit read only property

const pt: Point = { x: 1, y: 2 };

console.log(pt);

export {};
