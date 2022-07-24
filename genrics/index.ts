const x: Array<number> = [];

x.push(1);
x.push(2 as number);
console.log(x);

// const m: Array<T> = [];

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

function identity<T>(item: T): T {
  return item;
}

identity<number>(1);
identity<string>("1");
identity<boolean>(true);

function getRandomNumber<T>(list: T[]): T {
  return [...list][Math.floor(Math.random() * list.length)];
}

getRandomNumber<number>([1, 2, 3]);
getRandomNumber<string>(["1", "2", "3"]);
getRandomNumber<boolean>([true, false]);

export {};
