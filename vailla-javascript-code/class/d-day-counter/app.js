// 0. 함수 정의하고 실행하는 방법

// 함수 정의하기.

// const output = function () {
//   console.log("함수를 실행했습니다.");
// };

// 함수 실행하기.

// 함수명()
// output();

const containerMessage = document.getElementById("d__day__message");
const container = document.getElementById("d__day__container");
const intervalIdArr = [];
const savedDate = localStorage.getItem("saved-date");

// containerMessage.textContent = "D-Day를 입력해 주세요."; // textContent innerHTML : 태그 변경도 가능하다.

containerMessage.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
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

const countMaker = function (targetDateInput) {
  // 7. local storage에 접근하기.

  localStorage.setItem("saved-date", targetDateInput); // key-value 형태

  // return data

  // const targetDateInput = dateFormMaker();
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

  // const childContainer = document.querySelectorAll(".d__day__child__container");
  // const remainingArray = [
  //   remainingDate,
  //   remainingHours,
  //   remainingMins,
  //   remainingSecs,
  // ];

  // remaining === 0 || remaining < 0 : 논리 연산자 이용하기.
  if (remaining <= 0) {
    // 없애고 싶은 메세지는 없애고, 남겨야 되는 메세지는 남기는 코드

    container.style.display = "none";
    containerMessage.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    containerMessage.style.display = "flex";

    setClearInterval();
    return; // 함수를 끝내는 용도로 이용할 수 있다. (불필요한 연산 제거할 수 있다.)
  } else if (isNaN(remaining)) {
    // 만약에 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다. 출력하기.

    container.style.display = "none";
    containerMessage.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    containerMessage.style.display = "flex";

    setClearInterval();
    return;
  } else {
    containerMessage.style.display = "none";
    container.style.display = "flex";

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    // 객체를 이용하여 화면에 남은 시간을 뿌려줄 수 있다.
    // bracket notation : 무조건 따옴표로 접근해야 한다.

    const documentArray = ["days", "hours", "min", "sec"];
    const documentObj = {};

    // for of를 이용하여 반복문 생성하여 documentObj 객체 생성하기.
    // bracket notation 이용하기. (typeof를 이용하면 string이 나옴.)

    for (let item of documentArray) {
      documentObj[item] = document.getElementById(item);
    }

    // 아래의 식을 이용하여 남은 시간은 화면에 업데이트 할 수 있다.

    // let i = 0;
    // for (let tag of documentArray) {
    //   document.getElementById(tag).textContent = remaining[timeKeys[i]];
    //   i += 1;
    // }

    // const documentObj = {
    //   days: document.getElementById("days"),
    //   hours: document.getElementById("hours"),
    //   min: document.getElementById("min"),
    //   sec: document.getElementById("sec"),
    // };

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

    // for (let i = 0; i < timeKeys.length; i++) {
    //   // 주의 : timeKeys, docKeys가 문자열 배열이기 때문에, bracket notation 이용하기.
    //   // documentObj[docKeys[i]] : 태그를 의미한다.

    //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    // }

    // 객체에 특화된 반복문
    // key => string, 따라서 bracket notation 이용해야 한다.

    // 6. 숫자를 두자리로 맞춰주는 함수 만들기.

    const format = (time) => {
      if (time < 10) {
        return "0" + time;
      }
      return time;
    };

    let idx = 0;
    for (let key in documentObj) {
      const remainingTime = remainingObj[timeKeys[idx]];
      documentObj[key].textContent = format(remainingTime);

      // timeKeys 이용하기. (객체에서는 키 중요하다.)
      // documentObj[key].textContent = remainingObj[timeKeys[idx]];

      // 나는 padStart 이용하였다.

      // documentObj[key].textContent = String(
      //   remainingObj[timeKeys[idx]]
      // ).padStart(2, "0");

      idx += 1; // idx++
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

// 3. 화면에 출력하는 함수 만들기

const starter = function (targetDateInput) {
  // setTimeout : 함수 실행 속도 늦춰주는 함수.
  // 문제점 : i가 100이 넘어가면 더 이상 시계가 돌아가지 않는다.

  // for (let i = 0; i < 100; i++) {
  //   // 익명 함수 사용해도 되고, 아니면 그냥 아래처럼 함수 이름만 적어줘도 된다.
  //   setTimeout(countMaker, 1000 * i);
  // }

  // setInterval : 정해진 시간마다 함수를 실행시켜주는 함수.

  // const targetDateInput = dateFormMaker();

  // 이 부분 이해가 잘 안 간다.

  if (!targetDateInput) {
    // 데이터가 들어가지 않은 경우
    targetDateInput = dateFormMaker();
  }

  setClearInterval(); // 앞 시간 제거하고 새로운 시간만 타이머 측정하기.

  countMaker(targetDateInput); // 1초 뒤에 실행되니까 앞에 한번 countMaker 실행시켜주기.
  const intervalId = setInterval(() => {
    countMaker(targetDateInput);
  }, 1000);

  intervalIdArr.push(intervalId);
};

// 4. 함수를 종료하는 함수 만들기.

const setClearInterval = () => {
  // for (let i = 0; i < intervalIdArr.length; i++) {
  //   clearInterval(intervalIdArr[i]);
  // }

  // 위에서 배운 for of를 이용하여 배열의 값을 clearInterval 할 수 있다.

  for (let i of intervalIdArr) {
    clearInterval(i);
  }
};

// 5. 에러 메세지가 제대로 뜨지 않아서 초기화 함수 만들기.

const resetTimer = () => {
  containerMessage.style.display = "flex";
  container.style.display = "none";

  containerMessage.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
  setClearInterval();
};

// truthy : 예외 처리에 유리하다.

if (savedDate) {
  // 저장된 데이터가 있는 경우
  starter(savedDate);
} else {
  container.style.display = "none";
  containerMessage.innerHTML = "<h3>D-day를 입력해 주세요.</h3>";
}
