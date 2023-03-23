// 1. html에서 해당 태그를 가져오기
const targetWord = document.getElementById("target__word");
// console.log(targetWord);

// 2. 해당 태그를 제어하기
const changeWord = function () {
  targetWord.innerText = "World";
};

// 3. 버튼에 해당 제어 함수를 넣어주기
