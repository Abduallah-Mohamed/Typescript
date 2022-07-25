export function add(x, y) {
    return x + y;
}
// sample function
export function sample(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr.splice(randomIndex, 1);
}
const x = 2;
// export { add, sample };
