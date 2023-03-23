const email = "codecamp@gmail.com";

// 1. 골뱅이 유무를 체크하여 이메일인지 아닌지 판단하기.
if (email.includes("@")) {
  console.log("이메일이 맞습니다.");
} else {
  console.log("이메일이 아닙니다.");
}

// 2. 계정 정보를 분리하기. (나는 split를 이용하였다.)
// 강사님은 userMail이라고 변수를 설정하였다.
const userInfo = email.split("@")[0];
console.log(userInfo);
let company = email.split("@")[1];

// 3. 규칙에 의하여 계정 정보 가려주기. (마지막 4글자 마스킹 처리하기.)
// 나는 slice와 replace를 같이 이용하였다.

const maskingUserInfo = userInfo.replace(userInfo.slice(-4), "****");
console.log(maskingUserInfo);

// 강사님은 빈 배열에 push를 이용하였다. 그리고 새로운 변수에 담아줬다.
let maskingMail = [];
maskingMail.push(userInfo[0]);
maskingMail.push(userInfo[1]);
maskingMail.push(userInfo[2]);
maskingMail.push(userInfo[3]);
maskingMail;

maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail;

let resultMail = maskingMail.join("") + "@" + company;
console.log(resultMail);

// 4. 마지막에 계정 정보와 이메일 합쳐주기.
// 나는 concat을 이용하였다.
const result = maskingUserInfo.concat("@", email.split("@")[1]);
console.log(result);
