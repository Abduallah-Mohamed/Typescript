"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
var x = [];
x.push(1);
x.push(2);
console.log(x);
// const m: Array<T> = [];
function numberIdentity(item) {
  return item;
}
function stringIdentity(item) {
  return item;
}
function booleanIdentity(item) {
  return item;
}
// function identity(item: any): any {
//   return item;
// }
function identity(item) {
  return item;
}
identity(1);
identity("1");
identity(true);
function getRandomNumber(list) {
  return __spreadArray([], list, true)[Math.floor(Math.random() * list.length)];
}
getRandomNumber([1, 2, 3]);
getRandomNumber(["1", "2", "3"]);
getRandomNumber([true, false]);
