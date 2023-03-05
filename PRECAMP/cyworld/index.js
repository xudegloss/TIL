// 클릭 시에 배경 하얗게 만들고, 글자 검은색으로 만들고 싶다.

const menuHome = () => {
  // setAttribute
  document.getElementById("contentFrame").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color:black; background-color: white";
  document.getElementById("menuJukebox").style =
    "color:white; background-color: #298EB5";
  document.getElementById("menuGame").style =
    "color:white; background-color: #298EB5";
};

const menuJukebox = () => {
  // setAttribute
  document.getElementById("contentFrame").setAttribute("src", "jukebox.html");
  document.getElementById("menuJukebox").style =
    "color:black; background-color: white";
  document.getElementById("menuHome").style =
    "color:white; background-color: #298EB5";
  document.getElementById("menuGame").style =
    "color:white; background-color: #298EB5";
};

const menuGame = () => {
  // setAttribute
  document.getElementById("contentFrame").setAttribute("src", "game.html");
  document.getElementById("menuGame").style =
    "color:black; background-color: white";
  document.getElementById("menuJukebox").style =
    "color:white; background-color: #298EB5";
  document.getElementById("menuHome").style =
    "color:white; background-color: #298EB5";
};
