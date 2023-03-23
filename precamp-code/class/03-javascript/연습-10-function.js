// 함수 실습 1 : 함수 선언식 (호이스팅 문제)

function hello() {
  alert("안녕하세요");
}
// undefined
hello();
// undefined

function hello(name) {
  alert(name + "님 안녕하세요.");
}
// undefined
let name = "김코딩";
// undefined
hello(name);
// undefined

// 함수 실습 2
