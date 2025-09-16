const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 뒤집는 함수
const rev = (s) => Number(s.split("").reverse().join(""));

const A = rev(input[0]);
const B = rev(input[1]);

console.log(Math.max(A, B));
