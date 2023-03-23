// 전체 체크박스를 클릭하면 모든 체크박스가 선택된다.
// js에서 checked 이용하면 체크 여부를 조절할 수 있다.

const totalCheckBox = () => {
  const totalCheck = document.getElementById("total-check");
  const checkBox = document.querySelectorAll("#checkbox");
  // checkbox 아이디를 가진 모든 태그 가져오기. 배열 형태로 가져옴.
  // console.log(checkBox);
  if (totalCheck.checked) {
    //  true
    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].checked = true;
    }
  } else {
    // false
    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].checked = false;
    }
  }
  // console.log(totalCheck.checked);
};
