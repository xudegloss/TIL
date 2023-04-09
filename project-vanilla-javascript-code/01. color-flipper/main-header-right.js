const changeRandomColor = () => {
  // 1. 배경 색상과 버튼 색상 변경하기

  const string = "ABCDEF0123456789";
  const container = document.getElementById("container");
  const btn = document.querySelector(".clickBtn");
  const backgroundColorName = document.getElementById(
    "background__color__name"
  );
  let colorName = [];

  for (let iter = 0; iter < 6; iter++) {
    let randomIdx = Math.floor(Math.random() * string.length);
    colorName.push(string[randomIdx]);
  }
  colorName = colorName.join("");
  container.style.backgroundColor = `#${colorName}`;
  backgroundColorName.innerText = `#${colorName}`;
  btn.style.backgroundColor = `#${colorName}`;

  // 2. 버튼 위에 마우스 올리면, 검은색 배경으로 만들고 색상은 흰색으로 변경하기

  btn.addEventListener(
    "mouseover",
    () => (btn.style.backgroundColor = "black")
  );
};
