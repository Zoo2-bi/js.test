const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const T = input[3].split(" ").map(Number);

for (let line of input) {
  const [a, b, c] = line.split(" ").map(Number);
  if (a == 0 && b == 0 && c == 0) break;

  const orem = [a, b, c].sort((x, y) => x - y); //오름차순
  const [x, y, z] = orem;

  if (x * x + y * y === z * z) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
