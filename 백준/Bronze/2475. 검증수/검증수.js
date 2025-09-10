const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input[0].split(" ").map(Number);

const i = numbers.reduce((sum, num) => sum + num ** 2, 0) % 10;

console.log(i);
