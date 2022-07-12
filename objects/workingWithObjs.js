var test = {
    name: "abduallah Mohamed",
    age: 30,
    isFunny: true
};
var coordinates = { x: test.age, y: test.age };
coordinates.x = 5;
console.log(coordinates.x);
console.log((test["isFunny"] = false));
function printName(person) {
    console.log(person.name);
}
var stranger = { age: 30, name: "Abduallah" };
printName(stranger);
function randomCoordinate() {
    return { x: Math.round(Math.random()), y: Math.round(Math.random()) };
}
console.log(randomCoordinate());
printName(test);
function calculatePayOut(song) {
    return (song.numStreams * 0.0033) / 100;
}
function printSong(song) {
    console.log("".concat(song.title, " by ").concat(song.artist));
}
console.log(calculatePayOut({
    title: "My song",
    artist: "Me",
    numStreams: 154200141,
    credits: {
        producer: "Me",
        songwriters: ["Me", "You"]
    }
}));
console.log(printSong({
    title: "Mysdfsdfdsfsfsdfsdf song",
    artist: "fsdfsdfsadf",
    numStreams: 154200141,
    credits: {
        producer: "Me",
        songwriters: ["Me", "You"]
    }
}));
