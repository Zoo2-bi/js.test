const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const a =parseInt(input[0]);
const n = input.slice(1);

for(let i =0; i<n.length; i++) {
   const[A,B] = n[i].trim().split(" ");
   const s = Number(A); //숫자라는뜻
   const r = B; // 따로 선언업이 기본값 문자열
   let result = "";

//두번째 for문은 문자열 길이만큼 돈다 근데 이제 s 만큼 반복된 r출력을 위해
   for(let j=0; j<r.length; j++) {
    result += r[j].repeat(s);
   }
   console.log(result)
}
//한줄씩 해결함 첫 줄 숫자 문자열 분리 후 문자열 repeat으로 s만큼 반복한다는 뜻
