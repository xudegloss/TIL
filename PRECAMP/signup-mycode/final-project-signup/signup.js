// 1. 핸드폰 번호 작성 시에 알아서 옆으로 커서 넘어가도록 만들기.
// 2. 비밀 번호와 비밀 번호 확인이 일치하는 경우에 인증번호 전송 가능해지기.
// 3. 전송 누르면 인증 번호가 화면에 표시되고, 3분 카운트가 시작된다. 그리고 인증 완료 버튼이 활성화된다.
// 4. 3분이 지나면 인증 완료 버튼이 비활성화된다.

// 1. 핸드폰 번호 작성 시에 알아서 옆으로 커서 넘어가도록 만들기.

const moveCursorFirst = () => {
  const p1 = document.getElementById("p1");

  if (p1.value.length === 3) {
    document.getElementById("p2").focus();
  }
};

const moveCursorSec = () => {
  const p2 = document.getElementById("p2");

  if (p2.value.length === 4) {
    document.getElementById("p3").focus();
  }
};

// 아직 해결하지 못 함. 비밀번호 가지고 나와야 된다.
const changeValue = (event) => {
  let pw1 = event.target.value;
  return pw1;
};

// 2. 비밀 번호와 비밀 번호 확인이 일치하는 경우에 인증번호 전송 가능해지기.
let isStarted = false;

const sendNum = () => {
  // 2. 타이머 실행시키기.
  let time = 180;
  let isDisabled = document.getElementById("complete__btn");

  if (isStarted === false) {
    isStarted = true;
    isDisabled.removeAttribute("disabled"); // 비활성화 끄기.

    // 1. 6자리 수의 인증 번호 생성하고 화면에 보여주기.
    let certificateNum = document.getElementById("certificate__num");
    let number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

    certificateNum.innerText = number;
    let timer = setInterval(function () {
      // 타이머가 실행되는 경우
      if (time >= 0) {
        const remainingMin = Math.floor(time / 60);
        const remainingSec = String(time % 60).padStart(2, "0");
        // console.log(`${remainingMin}분 ${remainingSec}초`);
        const min = document.getElementById("remaining__min");
        const sec = document.getElementById("remaining__sec");

        min.innerText = remainingMin;
        sec.innerText = remainingSec;
        time = time - 1;
      } else {
        // console.log("타이머가 종료되었습니다.");
        // 타이머를 종료시키는 경우
        isDisabled.setAttribute("disabled", ""); // 비활성화 켜기.
        clearInterval(timer);
        isStarted = false;
      }
    }, 1000);
  } else {
  }
};
