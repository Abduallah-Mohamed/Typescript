type Point = {
  readonly x: number;
  y: number;
  readonly z?: number; // optional property
};

const test = {
  name: "abduallah Mohamed",
  age: 30,
  isFunny: true,
};

const coordinates: Point = { x: test.age, y: test.age };

// coordinates.x = 10; // will not work because of the readonly property
coordinates.y = 5; // works
console.log(coordinates.x);

console.log((test["isFunny"] = false));

function printName(person: { name: string }) {
  console.log(person.name);
}
const stranger = { age: 30, name: "Abduallah" };
printName(stranger);

function randomCoordinate(): Point {
  return { x: Math.round(Math.random()), y: Math.round(Math.random()) };
}

console.log(randomCoordinate());

printName(test);

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; songwriters: string[] };
};

function calculatePayOut(song: Song): number {
  return (song.numStreams * 0.0033) / 100;
}

function printSong(song: Song): void {
  console.log(`${song.title} by ${song.artist}`);
}

console.log(
  calculatePayOut({
    title: "My song",
    artist: "Me",
    numStreams: 154200141,
    credits: {
      producer: "Me",
      songwriters: ["Me", "You"],
    },
  })
);

console.log(
  printSong({
    title: "Mysdfsdfdsfsfsdfsdf song",
    artist: "fsdfsdfsadf",

    numStreams: 154200141,
    credits: {
      producer: "Me",
      songwriters: ["Me", "You"],
    },
  })
);
