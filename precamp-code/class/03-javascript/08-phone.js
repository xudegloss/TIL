const changeFocus1 = () => {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2");

  if (p1.length === 3) {
    p2.focus();
  }
};

const changeFocus2 = () => {
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3");

  if (p2.length === 4) {
    p3.focus();
  }
};
