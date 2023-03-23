const checkValidation = () => {
  // 값이 입력되기 때문에 true 이다.
  let email = document.getElementById("email").value;
  let pw1 = document.getElementById("pw1").value;
  let pw2 = document.getElementById("pw2").value;

  if (email && pw1 && pw2) {
    // email !== "" && pw1 !== "" && pw2 !== "" : 위의 코드가 코드 최적화
    // 모든 입력값이 빈 값이 아닌 경우
    if (pw1 === pw2) {
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById("submit").disabled = true;
    }
  } else {
    // 하나라도 비어있는 경우
    document.getElementById("submit").disabled = true;
  }
};
