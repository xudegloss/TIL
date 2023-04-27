// 한꺼번에 여러 요소 등록하기.
const btn = document.querySelectorAll(".btn__items"); // NodeList
let count = document.getElementById("count");

// forEach를 활용하여 한번에 addEventListener 등록하기.
btn.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.textContent === "DECREASE") {
      event.currentTarget.classList.add("decrease");
      if (event.currentTarget.className.includes("decrease")) {
        count.innerText = parseInt(count.innerText) - 1;
        count.style.color = "#ff0000";
      }
    } else if (element.textContent === "RESET") {
      event.currentTarget.classList.add("reset");
      if (event.currentTarget.className.includes("reset")) {
        count.innerText = parseInt(0);
        count.style.color = "#102a42";
      }
    } else {
      event.currentTarget.classList.add("increase");
      if (event.currentTarget.className.includes("increase")) {
        count.innerText = parseInt(count.innerText) + 1;
        count.style.color = "#008000";
      }
    }
  });
});
