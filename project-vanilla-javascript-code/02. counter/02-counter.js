let count = Number(document.querySelector("#count").innerText);
let counter = document.querySelector("#count");

// 1. count에 따라서 색상이 변경되는 것을 나타내는 함수 만들기.

const colorChange = () => {
  if (count < 0) {
    counter.style.color = "#ff0000";
  } else if (count === 0) {
    counter.style.color = "#102a42";
  } else {
    counter.style.color = "#008000";
  }
};

// 2. 3개의 버튼을 각자 클릭한 경우에 감소, 리셋, 증가 기능 만들어주기.

const resetCount = () => {
  count = 0;
  counter.innerText = count;
  colorChange();
};

const decreaseCount = () => {
  count -= 1;
  counter.innerText = count;
  colorChange();
};

const increaseCount = () => {
  count += 1;
  counter.innerText = count;
  colorChange();
};
