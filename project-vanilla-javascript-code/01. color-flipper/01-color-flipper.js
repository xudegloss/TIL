// 1. 버튼을 클릭했을 때, 색상이 랜덤으로 변경되는 함수

const changeBackGround = () => {
  let colorArray = ["rgba(133, 122, 200)", "red", "green", "#f15025"];
  let randomColor = Math.floor(Math.random() * colorArray.length);

  const btn = document.querySelector(".clickBtn");
  const container = document.getElementById("container");

  container.style.backgroundColor = colorArray[randomColor];
  btn.style.backgroundColor = colorArray[randomColor];

  // 2. 마우스를 위로 올렸을 때, 배경색 검은색으로 변경되도록 만듦

  btn.addEventListener(
    "mouseover",
    () => (btn.style.backgroundColor = "black")
  );
};
