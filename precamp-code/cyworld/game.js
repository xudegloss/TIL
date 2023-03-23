const isSuccess = () => {
  const word = document.getElementById("word");
  const myWord = document.getElementById("myword").value;
  const result = document.getElementById("result");
  const wordLast = word.innerText[word.innerText.length - 1];
  // 마지막 인덱스 = (전체 길이) - 1
  // console.log(word.innerText[word.innerText.length - 1]);
  // 강사님은 나의 단어의 첫 번째 글자도 변수에 할당했다.

  if (wordLast === myWord[0]) {
    // 정답인 경우
    result.innerText = "정답입니다!";
    word.innerText = myWord;
    // 입력한 값을 빈 문자열로 변경하기. 태그에서 값을 변경해야 한다.
    document.getElementById("myword").value = "";
  } else {
    // 오답인 경우
    result.innerText = "땡!";
    // 입력한 값을 빈 문자열로 변경하기. 태그에서 값을 변경해야 한다.
    document.getElementById("myword").value = "";
  }
};
