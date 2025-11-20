const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const year = parseInt(input[0]);
if(year%4==0 && year%100!=0 || year%400==0) {
    console.log("1");
} else {
    console.log("0");
}