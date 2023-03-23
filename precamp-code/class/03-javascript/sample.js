const remaining = document.getElementById("remaining");

let isStarted = false;

const clickBtn = () => {
  // 계속 클릭해도 isStarted가 true이기 때문에 새롭게 갱신되지 않는다.
  if (isStarted === false) {
    // 타이머가 작동 중이 아닌 경우

    let time = 180; // 3분, 초 개념으로 작성한다.
    let timer; // 변수 생성
    isStarted = true;
    document.getElementById("finish").disabled = false;

    // 변수 할당
    timer = setInterval(function () {
      if (time >= 0) {
        const remainingMin = Math.floor(time / 60);
        const remainingSec = String(time % 60).padStart(2, "0");
        // console.log(`남은 시간 : ${remainingMin}분 ${remainingSec}초`);
        remaining.innerText = `${remainingMin}:${remainingSec}`;
        time = time - 1;
      } else {
        // 타이머 끝나는 시점에 다시 isStarted를 false로 변경해야 종료 후에 다시 누를 수 있다.
        document.getElementById("finish").disabled = true;
        isStarted = false;
        // 이 함수를 나가지 않고 계속 하여 else 구문이 실행된다.
        // console.log("타이머가 작동중...");
        // setInterval 제거하기.
        console.log("타이머 작동중...");
        clearInterval(timer); // setInterval 함수를 timer에 재할당 > setInterval 함수 제거하기.
      }
    }, 1000);
  } else {
    // 타이머가 작동 중인 경우
  }
};
