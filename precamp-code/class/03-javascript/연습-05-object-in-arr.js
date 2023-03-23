let popularFruit = [
  { ranking: 0, fruit: "레드향" },
  { ranking: 1, fruit: "샤인머스켓" },
  { ranking: 2, fruit: "산청딸기" },
  { ranking: 3, fruit: "한라봉" },
  { ranking: 4, fruit: "사과" },
  { ranking: 5, fruit: "애플망고" },
  { ranking: 6, fruit: "딸기" },
  { ranking: 7, fruit: "천혜향" },
  { ranking: 8, fruit: "과일선물세트" },
  { ranking: 9, fruit: "귤" },
];
// undefined
popularFruit;
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
for (let i = 0; i < popularFruit.length; i++) {
  console.log(popularFruit[i].ranking, popularFruit[i].fruit);
}
// 0 '레드향'
// 1 '샤인머스켓'
// 2 '산청딸기'
// 3 '한라봉'
// 4 '사과'
// 5 '애플망고'
// 6 '딸기'
// 7 '천혜향'
// 8 '과일선물세트'
// 9 '귤'
