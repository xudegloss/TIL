// setInterval 실습

let time = 10;
// undefined

setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time--;
  }
}, 1000);
// 2
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
