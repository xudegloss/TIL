let classmates = ["철수", "영희", "훈이"];
// undefined;
classmates;
// (3)[("철수", "영희", "훈이")];
classmates.length;
// 3;
classmates[0];
// "철수";
classmates[1];
// "영희";
classmates[2];
// "훈이";
classmates.includes("맹구");
// false;
classmates.push("맹구");
// 4;
classmates.includes("맹구");
// true;
classmates.length;
// 4;
classmates.pop();
// "맹구";
classmates.length;
// 3;
classmates.includes("맹구");
// false;

let developer = ["성실함", "문제 해결", "꾸준함", "용기", "개발에 대한 생각"];
// undefined
developer[1];
// '문제 해결'

let dream = ["커리어 점프", "성공", "할 수 있다"];
// undefined
dream;
// (3) ['커리어 점프', '성공', '할 수 있다']
let result = developer.concat(dream);
// undefined
result;
// (8) ['성실함', '문제 해결', '꾸준함', '용기', '개발에 대한 생각', '커리어 점프', '성공', '할 수 있다']

const email = "code****@gmail.com";
// undefined
email;
// 'code****@gmail.com'
email[4];
// '*'
email.slice(4, 8);
// '****'
