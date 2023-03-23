let array = ["철수", "영희", "훈이"];
// undefined
array;
// (3) ['철수', '영희', '훈이']
array.length;
// 3
array[0];
// '철수'
array[1];
// '영희'
array[2];
// '훈이'
array.push("맹구");
// 4
array.length;
// 4
array[3];
// '맹구'
array.pop();
// '맹구'
array;
// (3) ['철수', '영희', '훈이']
array.sort();
// (3) ['영희', '철수', '훈이']
array.includes("선희");
// false
array.push("선희");
// 4
array.includes("선희");
// true
array.pop();
// '선희'
array;
// (3) ['영희', '철수', '훈이']

let fruit = [];
// undefined
fruit;
// []
fruit.push("바나나");
// 1
fruit.push("키위");
// 2
fruit.push("딸기");
// 3
fruit.push("포도");
// 4
fruit;
// (4) ['바나나', '키위', '딸기', '포도']
let money = [1, 10, 100, 1000];
// undefined
let concat_array = fruit.concat(money);
// undefined
concat_array;
// (8) ['바나나', '키위', '딸기', '포도', 1, 10, 100, 1000]

concat_array.join("");
// '바나나키위딸기포도1101001000'
concat_array.join();
// 이런 경우에는 콤마로 연결된다.
// '바나나,키위,딸기,포도,1,10,100,1000'
concat_array.join("/");
// '바나나/키위/딸기/포도/1/10/100/1000'
concat_array.join("-");
// '바나나-키위-딸기-포도-1-10-100-1000'

let email = "xudegloss@gmail.com";
// undefined
email;
// 'xudegloss@gmail.com'
email.slice(0, 9);
// 'xudegloss'
email.slice(10);
// 'gmail.com'
email.slice(0, -10);
// 'xudegloss'
email.slice(-9);
// 'gmail.com'

let feeling_word = ["happy", "sad", "exciting", "boring", "thinking"];
// undefined
feeling_word;
// (5) ['happy', 'sad', 'exciting', 'boring', 'thinking']
feeling_word.filter((word) => word.length < 4);
// ['sad']
feeling_word.filter((word) => word.length > 3);
// (4) ['happy', 'exciting', 'boring', 'thinking']

let numbers = [1, 3, 5, 7, 23, 100];
// undefined
numbers;
// (6) [1, 3, 5, 7, 23, 100]
numbers.map((num) => num + 2);
// (6) [3, 5, 7, 9, 25, 102]
numbers.map((num) => num * 3);
// (6) [3, 9, 15, 21, 69, 300]
numbers.map((num) => num / 5);
// (6) [0.2, 0.6, 1, 1.4, 4.6, 20]
numbers.map((num) => num % 5);
// (6) [1, 3, 0, 2, 3, 0]
