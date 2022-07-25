export function add(x: number, y: number) {
  return x + y;
}

// sample function
export function sample<T>(arr: T[]): T[] {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr.splice(randomIndex, 1);
}

const x = 2;

// export { add, sample };
