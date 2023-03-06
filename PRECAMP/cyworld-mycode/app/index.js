// 1. 버튼을 누르는 순간에 해당 페이지로 가도록 기능을 제작해야 한다.
// 2. 버튼을 누르는 순간에 배경색와 글자색을 변경해야 한다.

// 1-1. 원하는 페이지로 가도록 하는 함수를 3개를 만든다. (이 부분 주의하기.)
// 1-2. 세 개의 함수 내에 배경색과 글자색을 변경하는 옵션도 넣어주면 된다.

const menuHome = document.getElementById("menuHome");
const menuJukeBox = document.getElementById("menuJukeBox");
const menuGame = document.getElementById("menuGame");

const movePageHome = function () {
  // setAttribute(attribute__name, attribute__value)
  document.getElementById("page__content").setAttribute("src", "home.html");
  menuHome.style.backgroundColor = "white";
  menuHome.style.color = "black";

  // 다른 버튼 원상태로 돌리기.
  menuJukeBox.style.backgroundColor = "#298eb5";
  menuJukeBox.style.color = "white";
  menuGame.style.backgroundColor = "#298eb5";
  menuGame.style.color = "white";
};

const movePageJukeBox = function () {
  document.getElementById("page__content").setAttribute("src", "jukebox.html");
  menuJukeBox.style.backgroundColor = "white";
  menuJukeBox.style.color = "black";

  // 다른 버튼 원상태로 돌리기.
  menuHome.style.backgroundColor = "#298eb5";
  menuHome.style.color = "white";
  menuGame.style.backgroundColor = "#298eb5";
  menuGame.style.color = "white";
};

const movePageGame = function () {
  document.getElementById("page__content").setAttribute("src", "game.html");
  menuGame.style.backgroundColor = "white";
  menuGame.style.color = "black";

  // 다른 버튼 원상태로 돌리기.
  menuHome.style.backgroundColor = "#298eb5";
  menuHome.style.color = "white";
  menuJukeBox.style.backgroundColor = "#298eb5";
  menuJukeBox.style.color = "white";
};
