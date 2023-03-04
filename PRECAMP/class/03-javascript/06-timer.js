const remainingMin = document.getElementById("remaining__min");
const remainingSec = document.getElementById("remaining__sec");
const completeBtn = document.getElementById("complete");

// 굳이 ms로 변경할 필요가 없다. 계산하기 더 불편하고 할 이유가 없다.
// 항상 상황에 따라서 달라진다.

// 문제점 발생 : 인증번호 받기를 여러 번 누르게 되면 계속 새로운 시간 업데이트 되어서 시간에 영향을 준다.

let time = 5;

const takeTarget = () => {
  // 변경하지 않으면 조건문을 물어보는 의미가 없다. 왜냐하면 항상 true 이기 때문이다.
  // 계속 눌러도 false 이기 때문에 다른 시간에 영향 받지 않는다.
  setInterval(function () {
    if (time > 0) {
      time = time - 1; // 여기서 빼줘야 3분에서 3분 또 출력되지 않고, 바로 2분 59초로 넘어간다.
      let min = Math.floor(time / 60);
      let sec = String(time % 60).padStart(2, "0");
      remainingMin.innerText = min;
      remainingSec.innerText = sec;
      // time = time - 1
      console.log("hi");
    } else {
      completeBtn.disabled = true;
    }
  }, 1000);
  // alt + 방향키 위 : 안 쪽으로 이동시킬 수 있다.
};
