const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const NA = Math.floor(A / B);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(NA);
console.log(A % B);
