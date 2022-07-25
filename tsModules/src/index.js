"use strict";
exports.__esModule = true;
var utils_js_1 = require("./utils.js");
var User_1 = require("./User");
console.log((0, utils_js_1.sample)([1, 2, 3, 4, 5]));
console.log((0, utils_js_1.add)(2, 3));
var user = new User_1["default"]("John");
console.log(user.name);
var x = 4;
