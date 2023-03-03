const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
// undefined

// Template Literals : 템플릿 리터럴
// 문자열 안에 변수를 넣어주기.

for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i].number} ${fruits[i].title}`);
}
// 1 '레드향'
// 2 '샤인머스켓'
// 3 '산청딸기'
// 4 '한라봉'
// 5 '사과'
// 6 '애플망고'
// 7 '딸기'
// 8 '천혜향'
// 9 '과일선물세트'
// 10 '귤'
// undefined

for (let i = 0; i < fruits.length; i++) {
  console.log(`과일 차트 ${fruits[i].number}위 ${fruits[i].title}입니다.`);
}
// 과일 차트 1위 레드향입니다.
// 과일 차트 2위 샤인머스켓입니다.
// 과일 차트 3위 산청딸기입니다.
// 과일 차트 4위 한라봉입니다.
// 과일 차트 5위 사과입니다.
// 과일 차트 6위 애플망고입니다.
// 과일 차트 7위 딸기입니다.
// 과일 차트 8위 천혜향입니다.
// 과일 차트 9위 과일선물세트입니다.
// 과일 차트 10위 귤입니다.
// undefined
