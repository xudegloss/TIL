let array = [];
// undefined
let object1 = {
  name: "아이린",
  group: "레드벨벳",
  age: 30,
};
// undefined
let object2 = {
  name: "슬기",
  group: "레드벨벳",
  age: 27,
};
// undefined
let object3 = {
  name: "웬디",
  group: "레드벨벳",
  age: 28,
};
// undefined
array.push(object1);
// 1
array.push(object2);
// 2
array.push(object3);
// 3
array;
// (3) [{…}, {…}, {…}]
array[0].name;
// '아이린'
array[0].group;
// '레드벨벳'
array[0].age;
// 30
let object4 = {
  name: "조이",
  group: "레드벨벳",
  age: 25,
};
// undefined
array.push(object4);
// 4
array;
// (4) [{…}, {…}, {…}, {…}]
array.pop();
// {name: '조이', group: '레드벨벳', age: 25}
array.length;
// 3
