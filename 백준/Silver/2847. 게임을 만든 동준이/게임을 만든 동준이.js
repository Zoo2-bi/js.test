const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

let N = input[0];
let score = input.slice(1);

let count = 0;

for (let i = N - 1; i > 0; i--) {
    if (score[i - 1] >= score[i]) {
        count += score[i - 1] - score[i] + 1;
        score[i - 1] = score[i] - 1;
    }
}

console.log(count);
