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

// 2. 핸드폰 번호까지 모두 입력한 경우 인증번호 전송 버튼 활성화하기.

const moveCursorLast = () => {
  const sendBtn = document.getElementById("send__num");
  if (document.getElementById("p3").value.length === 4) {
    sendBtn.disabled = false;
    sendBtn.style.color = "#0068ff";
    sendBtn.style.backgroundColor = "white";
  }
};

// 3. 인증번호 전송 버튼 누르면 인증 완료 버튼도 활성화시키기.
// 4. 비밀 번호와 비밀 번호 확인이 일치하는 경우에 인증번호 전송 가능해지기.
let isStarted = false;

const sendNum = () => {
  // 2. 타이머 실행시키기.
  let time = 180;
  let isDisabled = document.getElementById("complete__btn");

  // 5. 인증 완료 버튼 누르면 타이머 멈추고, 인증 완료 알림창 띄우기.
  if ((document.getElementById("complete__btn").disabled = false)) {
    isStarted = true;
  }

  if (isStarted === false) {
    isStarted = true;
    isDisabled.removeAttribute("disabled"); // 비활성화 끄기.
    isDisabled.style.backgroundColor = "#0068ff";
    isDisabled.style.color = "white";

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
    // isStarted = true
    alert("인증이 완료되었습니다.");
    clearInterval(2);
    // timer가 2이기 때문이다.
    // timer 자체를 가져오고 싶었는데 자꾸 undefined가 떠서 timer가 반환하는 값을 넣어줬다.
  }
};

// 6. 가입 버튼 누르면 위의 빈칸을 모두 채웠는지 검토하고, 다 채운 경우에는 가입을 축하한다는 메세지를 띄우기.
const checkAll = () => {
  const warning = document.querySelectorAll(".warning");
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const pw1 = document.getElementById("pw1").value;
  const pw2 = document.getElementById("pw2").value;
  const p1 = document.getElementById("p1").value;
  const p2 = document.getElementById("p2").value;
  const p3 = document.getElementById("p3").value;

  if (email === "") {
    warning[0].style.display = "block";
  } else {
    warning[0].style.display = "none";
  }

  if (name === "") {
    warning[1].style.display = "block";
  } else {
    warning[1].style.display = "none";
  }

  if ((pw1 === "") | (pw2 === "")) {
    warning[2].style.display = "block";
  } else {
    warning[2].style.display = "none";
  }

  if (pw1 !== pw2) {
    warning[3].style.display = "block";
  } else {
    warning[3].style.display = "none";
  }

  if ((p1 === "") | (p2 === "") | (p3 === "")) {
    warning[4].style.display = "block";
  } else {
    warning[4].style.display = "none";
  }

  if (document.getElementById("region").options.selectedIndex === 0) {
    warning[5].style.display = "block";
  } else {
    warning[5].style.display = "none";
  }

  radios = document.querySelector("input[type=radio][name=sex]:checked");
  // console.log(!!radios);
  if (!!radios) {
    // true
    warning[6].style.display = "none";
  } else {
    warning[6].style.display = "block";
  }

  if (
    (email !== "") &
    (name !== "") &
    (pw1 === pw2) &
    (p1 !== "") &
    (p2 !== "") &
    (p3 !== "") &
    (document.getElementById("region").options.selectedIndex !== 0) &
    !!radios
  ) {
    alert("코드캠프 회원가입을 축하드립니다.");
  }

  // 아래 코드는 한꺼번에 처리하는 경우에 유용하다.
  // for (let idx = 0; idx < warning.length - 1; idx++) {
  //   if (
  //     (email === "") |
  //     (name === "") |
  //     (p1 === "") |
  //     (p2 === "") |
  //     (p3 === "") |
  //     (document.getElementById("region").options.selectedIndex === 0) |
  //     (pw1 !== pw2)
  //   ) {
  //     warning[idx].style.display = "block";
  //   } else {
  //     warning[idx].style.display = "none";
  //   }
  // }
  // 선택 인덱스 : console.log(document.getElementById("region").options.selectedIndex);
};
