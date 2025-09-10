const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const Year = parseInt(input[0]);

if (Year % 4 == 0 && (Year % 100 != 0 || Year % 400 == 0)) {
  console.log("1");
} else {
  console.log("0");
}
