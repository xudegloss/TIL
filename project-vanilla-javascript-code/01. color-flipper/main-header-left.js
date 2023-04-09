// 1. 버튼을 클릭했을 때, 색상이 랜덤으로 변경되는 함수

const changeBackGround = () => {
  let colorArray = ["Rgba(133, 122, 200)", "Red", "Green", "#F15025"];
  let randomColor = Math.floor(Math.random() * colorArray.length);

  const btn = document.querySelector(".clickBtn");
  const container = document.getElementById("container");
  const colorName = document.getElementById("background__color__name");

  container.style.backgroundColor = colorArray[randomColor];
  colorName.innerText = colorArray[randomColor];
  btn.style.backgroundColor = colorArray[randomColor];

  // 2. 마우스를 위로 올렸을 때, 배경색 검은색으로 변경되도록 만듦

  btn.addEventListener(
    "mouseover",
    () => (btn.style.backgroundColor = "black")
  );
};
