// 0. 함수 정의하고 실행하는 방법

// 함수 정의하기.

// const output = function () {
//   console.log("함수를 실행했습니다.");
// };

// 함수 실행하기.

// 함수명()
// output();

// 1. dateFormMaker 함수 만들기 : input에 담기는 값 가져오는 함수 만들기.

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target__year__input").value;
  const inputMonth = document.querySelector("#target__month__input").value;
  const inputDate = document.querySelector("#target__date__input").value;

  // Template literals

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  // 또 다른 함수에 dateFormat을 참조해야 한다.
  // 함수에 갇혀있는 변수 : 지역 변수
  // 함수 밖에 있는 변수 : 전역 변수
  // 바깥으로 나갈 수는 없지만, 안으로 들어갈 수 있다.
};

// 2.  countMaker 함수 만들기 : 현 시점에서 원하는 날짜까지 얼마나 남았는지 체크하는 함수 만들기.

const countMaker = function () {
  const newDate = new Date(); // 현 시점
  const targetDate = new Date(dateFormat); // 원하는 날짜
  const remaining = (targetDate - newDate) / 1000; // 원하는 날짜에서 현 시점까지 남은 s(초)

  // 남은 날짜, 남은 시간, 남은 분, 남은 초 나타내기.

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMins = Math.floor(remaining / 60) % 60;
  const remainingSecs = Math.floor(remaining) % 60;
  console.log(remainingDate, remainingHours, remainingMins, remainingSecs);
};
