"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log(res.data);
})
    .catch((err) => {
    console.log(err);
});
