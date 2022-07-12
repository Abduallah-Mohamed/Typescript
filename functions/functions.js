"use strict";
exports.__esModule = true;
function hi(t) {
    return t * t;
}
var doSomething = function (userName, age, isFunny) {
    return "".concat(userName, " is ").concat(age, " years old and is ").concat(isFunny ? "funny" : "not funny");
};
var great = function (persong) {
    if (persong === void 0) { persong = "stranger"; }
    return "Hello ".concat(persong);
};
var addNums = function (a, b) {
    return a + b;
};
function ran(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return { num: num };
}
var colors = ["red", "green", "blue"];
colors.map(function (color) {
    return color;
});
function helloFrom(s) {
    console.log(s);
}
function errorMessage(msg) {
    throw new Error(msg);
}
console.log(hi(55));
console.log(doSomething("John", 30, true));
console.log(great());
console.log(great("John"));
console.log(addNums(5, 6));
console.log(ran(5));
errorMessage("This is an error");
