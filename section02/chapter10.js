// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date("1997-01-07/10:10:10");

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초(UTC)"로 부터 몇 ms가 지나갔는지를 의미하는 숫자값
let ts1 = date1.getTime();

let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, minute, second)

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setHours(23);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간없이 날짜
console.log(date1.toLocaleString()); // 현지화된 형태
