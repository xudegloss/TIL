// 0. 함수 정의하고 실행하는 방법

// 함수 정의하기.

// const output = function () {
//   console.log("함수를 실행했습니다.");
// };

// 함수 실행하기.

// 함수명()
// output();

const containerMessage = document.querySelector("#d__day__message");
const container = document.getElementById("d__day__container");

// containerMessage.textContent = "D-Day를 입력해 주세요."; // textContent
// innerHTML : 태그 변경도 가능하다.

containerMessage.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
containerMessage.style.display = "flex"; // flex
container.style.display = "none";

// 1. dateFormMaker 함수 만들기 : input에 담기는 값 가져오는 함수 만들기.

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target__year__input").value;
  const inputMonth = document.querySelector("#target__month__input").value;
  const inputDate = document.querySelector("#target__date__input").value;

  // Template literals
  // 또는 덧셈 연산자를 이용하는 경우도 있다. 상황에 맞게 더 편리한 것 이용하기.

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  // 또 다른 함수에 dateFormat을 참조해야 한다.
  // 함수에 갇혀있는 변수 : 지역 변수
  // 함수 밖에 있는 변수 : 전역 변수
  // 바깥으로 나갈 수는 없지만, 안으로 들어갈 수 있다.

  return dateFormat;
};

// 2.  countMaker 함수 만들기 : 현 시점에서 원하는 날짜까지 얼마나 남았는지 체크하는 함수 만들기.

const countMaker = function () {
  // return data

  const targetDateInput = dateFormMaker();
  const newDate = new Date(); // 현 시점
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0); // 원하는 날짜 (자정으로 설정하기.)
  const remaining = (targetDate - newDate) / 1000; // 원하는 날짜에서 현 시점까지 남은 s(초)

  // 남은 날짜, 남은 시간, 남은 분, 남은 초 나타내기.

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMins = Math.floor(remaining / 60) % 60;
  const remainingSecs = Math.floor(remaining) % 60;

  // console.log(remainingDate, remainingHours, remainingMins, remainingSecs);

  // 종료된 시간에 대하여 처리하기.
  // 옳지 않는 입력값에 대하여 처리하기. (NaN이 되는 값)
  // 이런 경우에 조건문을 이용하면 된다.

  // 수도 코드
  // 만약 remaining이 0 또는 음수라면, 타이머가 종료되었습니다. 출력하기.

  const childContainer = document.querySelectorAll(".d__day__child__container");
  const remainingArray = [
    remainingDate,
    remainingHours,
    remainingMins,
    remainingSecs,
  ];

  // remaining === 0 || remaining < 0 : 논리 연산자 이용하기.
  if (remaining <= 0) {
    containerMessage.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
  } else if (isNaN(remaining)) {
    // 만약에 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력하기.
    containerMessage.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
  } else {
    containerMessage.style.display = "none";
    container.style.display = "flex"; // flex

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    // 객체를 이용하여 화면에 남은 시간을 뿌려줄 수 있다.
    // bracket notation : 무조건 따옴표로 접근해야 한다.

    const documentObj = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      min: document.getElementById("min"),
      sec: document.getElementById("sec"),
    };

    const remainingObj = {
      remainingDate: Math.floor(remaining / 3600 / 24),
      remainingHours: Math.floor(remaining / 3600) % 24,
      remainingMins: Math.floor(remaining / 60) % 60,
      remainingSecs: Math.floor(remaining) % 60,
    };

    // documentObj.days.textContent = remainingObj.remainingDate;
    // documentObj.hours.textContent = remainingObj.remainingHours;
    // documentObj.min.textContent = remainingObj.remainingMins;
    // documentObj.sec.textContent = remainingObj.remainingSecs;

    // key를 이용하여 value를 가져올 수 있다.

    const timeKeys = Object.keys(remainingObj);
    const docKeys = Object.keys(documentObj);

    for (let i = 0; i < timeKeys.length; i++) {
      // 주의 : timeKeys, docKeys가 문자열 배열이기 때문에, bracket notation 이용하기.
      // documentObj[docKeys[i]] : 태그를 의미한다.

      documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    }

    // document.getElementById("days").innerText = remainingDate;
    // document.getElementById("hours").innerText = remainingHours;
    // document.getElementById("min").innerText = remainingMins;
    // document.getElementById("sec").innerText = remainingSecs;

    // firstChild는 안되는데, firstElementChild는 되네...?
    // id 이용하여 나타내도 되고, idx+=1 처리하여 나타내도 된다.

    // forEach 완료하기.

    // let idx = 0;
    // childContainer.forEach((element) => {
    //   element.firstElementChild.innerText = remainingArray[idx];
    //   idx += 1;
    // });
  }
};
