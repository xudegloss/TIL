const targetNumber = document.getElementById("target__number");

// 1. 함수 선언식
// function changeTarget() {
//   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   targetNumber.innerText = token;
// }

// 2. 함수 표현식
// const changeTarget = function () {
//   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   targetNumber.innerText = token;
// };

// 3. 화살표 함수
const changeTarget = () => {
  // targetNumber.innerText = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  targetNumber.innerText = token;
  targetNumber.style.color = `#${token}`;

  // Math.random을 인덱스로 만들어서 이용할 수 있다.
  // 나는 5가지 색 중에서 골라서 이용하였다.
  // const colorArray = ["red", "blue", "green", "tomato", "purple"];
  // const targetIndex = Math.floor(Math.random() * 4);
  // targetNumber.style.color = colorArray[targetIndex];
};
