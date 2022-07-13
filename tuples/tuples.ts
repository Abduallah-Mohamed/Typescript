let items: [number, number, string] = [1, 2, "3"];
console.log(items);

items = [1, 3, "hello"];
console.log(items);

type HttpResponse = [number, string];

const goodResponse: HttpResponse = [200, "OK"];
const badResponse: HttpResponse = [404, "Not Found"];

let anotherResponse: HttpResponse = [400, "Bad Request"];

anotherResponse.push("hello from the other side");

console.log(anotherResponse);

anotherResponse.pop();
anotherResponse.pop();
anotherResponse.pop();

console.log(anotherResponse);

export {};
