"use strict";
exports.__esModule = true;
var items = [1, 2, "3"];
console.log(items);
items = [1, 3, "hello"];
console.log(items);
var goodResponse = [200, "OK"];
var badResponse = [404, "Not Found"];
var anotherResponse = [400, "Bad Request"];
anotherResponse.push("hello from the other side");
console.log(anotherResponse);
anotherResponse.pop();
anotherResponse.pop();
anotherResponse.pop();
console.log(anotherResponse);
