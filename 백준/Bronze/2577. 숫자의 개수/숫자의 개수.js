const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const result = String(A * B * C);

const count = Array(10).fill(0);

for (let i = 0; i < result.length; i++) {
  const digit = Number(result[i]); //문자형을 숫자로
  count[digit]++;
}

for (let i = 0; i < 10; i++) {
  console.log(count[i]);
}
