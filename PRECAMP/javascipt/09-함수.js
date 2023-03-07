// 함수 실습

function sayHello() {
  console.log("안녕하세요.");
}
// undefined
sayHello();
// 안녕하세요.
// undefined

function sayHelloTo(name) {
  console.log(`${name}님, 안녕하세요.`);
}
// undefined
sayHelloTo("김코딩");
// 김코딩님, 안녕하세요.
// undefined
let name = "나코딩";
// undefined
sayHelloTo(name);
// 나코딩님, 안녕하세요.
// undefined

// 함수 작성 방법

// 1. 함수 선언식
function sayHelloTo(name) {
  console.log(`${name}님, 안녕하세요.`);
}
// undefined
sayHelloTo("김코딩");
// 김코딩님, 안녕하세요.
// undefined
sayHelloTo(name);
// 나코딩님, 안녕하세요.
// undefined

// 2. 함수 표현식
const sayHiTo = function (name) {
  console.log(`${name}님, 안녕하세요.`);
};
// undefined
sayHiTo("김코딩");
// 김코딩님, 안녕하세요.

// 3. 화살표 함수
const sayByeTo = (name) => {
  console.log(`${name}님, 안녕히 가세요.`);
};
// undefined
sayByeTo("김코딩");
// 김코딩님, 안녕히 가세요.
// undefined

// 내장 함수
// 1. setTimeout
setTimeout(function () {
  console.log("안녕하세요.");
}, 3000);
// 2
// 안녕하세요.

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(`${i}회 진행 중...`);
  }, 1000 * i);
}
// 52
// 0회 진행 중...
// 1회 진행 중...
// 2회 진행 중...
// 3회 진행 중...
// 4회 진행 중...
// 5회 진행 중...
// 6회 진행 중...
// 7회 진행 중...
// 8회 진행 중...
// 9회 진행 중...

// 2. setInterval
setInterval(function () {
  console.log("1초가 지났습니다.");
}, 1000);
// 1초에 한 번씩 "1초가 지났습니다." 출력된다.

// setInterval을 통하여 1초마다 하나씩 줄어드는 기능을 만들 수 있다.
let time = 10;
undefined;
setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time--;
  }
}, 1000);
// 2
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
