const remainingMin = document.getElementById("remaining__min");
const remainingSec = document.getElementById("remaining__sec");
const completeBtn = document.getElementById("complete");

// 굳이 ms로 변경할 필요가 없다. 계산하기 더 불편하고 할 이유가 없다.
// 항상 상황에 따라서 달라진다.

let time = 180;
const takeTarget = () => {
  setInterval(function () {
    if (time >= 0) {
      let min = Math.floor(time / 60);
      let sec = String(time % 60).padStart(2, "0");
      remainingMin.innerText = min;
      remainingSec.innerText = sec;
      time = time - 1;
    } else {
      completeBtn.disabled = true;
    }
  }, 1000);
};
