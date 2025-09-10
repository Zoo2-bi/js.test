const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = "\\    /\\";
const b = " )  ( ')";
const c = "(  /  )";
const d = " \\(__)|";

console.log(a);
console.log(b);
console.log(c);
console.log(d);