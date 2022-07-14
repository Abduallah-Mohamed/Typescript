"use strict";
exports.__esModule = true;
var obj = {
    id: 1,
    firstName: "John",
    lastName: "hardy",
    nickName: "mohsen",
    sayHi: function () { return "hello"; },
    stayAwake: function () { return "good morning"; },
    applyDiscount: function (discount) { return discount * 2; }
};
obj.firstName = "farouq";
// obj.id = 2; // I can not edit read only property
var pt = { x: 1, y: 2 };
console.log(pt);
var product = {
    name: "apple",
    price: 10,
    getPriceWithTax: function (tax) { return tax * product.price; },
    applyDiscount: function (discount) {
        var newPrice = discount * product.price;
        product.price = newPrice;
        return product.price;
    }
};
console.log(product.getPriceWithTax(0.1));
console.log(product.applyDiscount(product.price));
console.log(product.price);
var dog = {
    name: "mohsen",
    age: 2,
    breed: "poodle",
    bark: function () { return "woof"; }
};
console.log(dog);
console.log(dog.bark());
var serviceDog = {
    name: "mohsen",
    age: 2,
    breed: "poodle",
    bark: function () { return "woof"; },
    job: "Drug Sniffer"
};
console.log(serviceDog);
var abduallah = {
    name: "abduallah",
    id: 1,
    salary: 1000,
    level: "junior",
    language: ["typescript", "javascript"]
};
