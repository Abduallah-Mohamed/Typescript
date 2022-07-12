let persons: string[] = [];

persons.push("John");

console.log(persons);

let anyTypesOfArray: any[] = [1, "string", true];

anyTypesOfArray.push({ name: "John" });

let h: Array<number> = [1, 2, 3];

type Point = {
  x: number;
  y: number;
};

let hhh: Point[] = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
];

hhh.push({ x: 3, y: 4 });

console.log(hhh);

// multi-dimensional arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// third dimension
let matrix3: number[][][] = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

matrix[0].push(7);

console.log(matrix);

export {};
