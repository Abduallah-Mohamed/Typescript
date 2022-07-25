"use strict";
exports.__esModule = true;
exports.sample = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
// sample function
function sample(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1);
}
exports.sample = sample;
var x = 2;
// export { add, sample };
