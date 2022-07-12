"use strict";
exports.__esModule = true;
var persons = [];
persons.push("John");
console.log(persons);
var anyTypesOfArray = [1, "string", true];
anyTypesOfArray.push({ name: "John" });
var h = [1, 2, 3];
var hhh = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
];
hhh.push({ x: 3, y: 4 });
console.log(hhh);
// multi-dimensional arrays
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
matrix[0].push(7);
console.log(matrix);
