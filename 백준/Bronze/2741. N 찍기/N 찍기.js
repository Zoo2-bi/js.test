const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const N =parseInt(input[0]);

for(let i = 1; i<=N; i++) {
    console.log(i);
}