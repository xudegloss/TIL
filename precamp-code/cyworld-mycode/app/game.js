// 1. 끝말잇기 기능을 추가하기.

// sudo code
// 1-1. 입력창에 단어를 입력한다.
// 1-2. 제시어의 맨 끝 글자와 입력창의 맨 앞 글자를 비교한다.
// 1-3. 동일한 경우 정답입니다! 출력하고 제시어 변경한다.
// 1-4. 동일하지 않은 경우 땡! 출력하고 제시어는 그대로 유지한다.

const startGame = () => {
  const target = document.getElementById("target");
  const myWord = document.getElementById("myword").value;
  const targetLast = target.innerText[target.innerText.length - 1];
  const result = document.getElementById("result");

  if (targetLast === myWord[0]) {
    // 동일한 경우
    result.innerText = "정답입니다!";
    target.innerText = myWord;
    // myWord = ""; : const라서 변경 불가능하기 때문에 사용 불가하다.
    document.getElementById("myword").value = "";
    // 위의 코드에 myWord="" 라고 하면 안 된다. 이미 myWord에 값이 있는데 myWord="" 라고 하면 새롭게 할당하는 것이기 때문이다.
    // 따라서 태그의 입력창의 값 그 자체를 가져와야 한다.
  } else {
    // 동일하지 않은 경우
    result.innerText = "땡!";
    document.getElementById("myword").value = "";
  }
};

// 2. LOTTO 기능 추가하기.

// sudo code
// 2-1. 랜덤으로 버튼이 정해진다.
// 2-2. 사용자가 누른 버튼과 랜덤으로 정해진 버튼이 같은 경우에 당첨입니다! 보여주기.
// 2-3. 다른 경우에는 꽝! 보여주기.
// 원래 버튼을 누르면 결과가 보이게 만들고 싶었는데 두 함수의 데이터를 어떻게 교환해야될지 몰라서 그냥 이렇게 만들었다.

const saveUserNum = (event) => {
  const sample = document.getElementById("user__number");
  // 이해가 잘 안 가지만, event 속성을 이용하면 계속 변화하는 태그 안의 값을 가져올 수 있다.
  // 참고 블로그 : https://23log.tistory.com/177
  let userNum = Number(event.target.innerText); // String To Number
  const randomArray = [3, 5, 10, 24, 30, 34];
  let idx = Math.floor(Math.random() * randomArray.length);
  let lotto = randomArray[idx]; // 컴퓨터가 골라준 로또 번호
  const lottoResult = document.getElementById("lotto__result");

  if (userNum === lotto) {
    lottoResult.innerText = "당첨입니다!";
    lottoResult.style.color = "green";
  } else {
    lottoResult.innerText = "꽝!";
    lottoResult.style.color = "red";
  }
};
