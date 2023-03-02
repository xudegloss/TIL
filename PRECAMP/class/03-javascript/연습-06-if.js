// 조건문 실습 1

if (1 + 1 === 2) {
  console.log("정답입니다.");
} else {
  console.log("틀렸습니다.");
}
// 정답입니다.
// undefined
if (true) {
  console.log("정답입니다.");
} else {
  console.log("틀렸습니다.");
}
// 정답입니다.
// undefined
if (!true) {
  console.log("정답입니다.");
} else {
  console.log("틀렸습니다.");
}
//  틀렸습니다.
// undefined
if (0) {
  console.log("정답입니다.");
} else {
  console.log("틀렸습니다.");
}
// 틀렸습니다.
// undefined
if (1) {
  console.log("정답입니다.");
} else {
  console.log("틀렸습니다.");
}
// 정답입니다.
// undefined

// 조건문 실습 1 퀴즈

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};
// undefined
profile;
// {name: '철수', age: 12, school: '다람쥐초등학교'}
if (profile.age >= 20) {
  console.log("성인입니다.");
} else if (profile.age >= 8 && profile.age <= 19) {
  // else if (profile.age <= 19 && profile.age >= 8)
  // else if (profile.age >= 8)
  // 위의 코드가 더 좋은 코드이다. 코드 최적화
  console.log("학생입니다.");
} else {
  // 잘못 입력하는 경우가 있을 수가 있다.
  // 그러므로 조건을 세분화하기.
  console.log("어린이입니다.");
}
// 학생입니다.
// undefined

// 코드 최적화와 예외 처리 (에러 핸들링)

if (profile.age >= 20) {
  console.log("성인입니다.");
} else if (profile.age >= 8) {
  // 코드 최적화
  console.log("학생입니다.");
} else if (profile.age > 0) {
  console.log("어린이입니다.");
} else {
  console.log("잘못 입력하셨습니다.");
}
// 학생입니다.
// undefined
