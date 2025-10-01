const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    // 문자열을 숫자로 변환
    const numbers = input.map(Number);
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    // 모든 난쟁이 쌍을 확인
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(sum - (numbers[i] + numbers[j]) === 100) {
                // 가짜 난쟁이를 제외한 배열 생성
                const result = numbers.filter((_, index) => index !== i && index !== j);
                // 오름차순 정렬
                return result.sort((a, b) => a - b);
            }
        }
    }
}

// 결과 출력
const answer = solution(input);
console.log(answer.join('\n'));