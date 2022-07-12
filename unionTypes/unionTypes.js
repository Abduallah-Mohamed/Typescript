"use strict";
exports.__esModule = true;
var age = 10;
age = "10";
var coordinates = { x: 10, y: 20 };
coordinates = { lat: 312.55, lang: 20.36 };
function printAge(age) {
    console.log("you are ".concat(age, " years old"));
}
printAge(age);
printAge("10");
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(34430, 0.1));
console.log(calculateTax("$5434", 0.1));
// array of union types (number | string)
var items = [
    [1, 2, "3"],
    ["a", "b", "c"],
];
console.log(items.length);
// array of strings only OR array of numbers only
// let items2: string[] | number[] = [1, "2", 3, "4"];
var coords = [];
coords.push({ lat: 10, lang: 20 });
coords.push({ x: 10, y: 20 });
console.log(coords);
// letrial type
var zero = 0;
var mood = "happy";
mood = "sad";
mood = "angry";
var today = 0;
console.log(today);
