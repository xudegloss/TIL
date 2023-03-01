let friend = {
  name: "철수",
  age: 13,
  camp: "코드캠프",
};
// undefined
friend;
// {name: '철수', age: 13, camp: '코드캠프'}
friend.name;
// '철수'
friend.age;
// 13
friend.camp;
// '코드캠프'
friend.test;
// undefined

let student1 = {
  name: "길동",
  pet: "강아지",
  house: "구로구",
};
// undefined
let student2 = {
  name: "철수",
  pet: "고양이",
  house: "관악구",
};
// undefined
let student3 = {
  name: "다희",
  pet: "미어캣",
  house: "강서구",
};
// undefined
let student = [student1, student2, student3];
// undefined
student;
// (3) [{…}, {…}, {…}]

student[0];
// {name: '길동', pet: '강아지', house: '구로구'}
student[1];
// {name: '철수', pet: '고양이', house: '관악구'}
student[2];
// {name: '다희', pet: '미어캣', house: '강서구'}
student[0].name;
// "길동";
student[0].pet;
// "강아지";
student[0].house;
// "구로구";

let classmates = [
  { name: "철수", age: 13, school: "다람쥐초등학교" },
  { name: "영희", age: 8, school: "공룡초등학교" },
  { name: "훈이", age: 11, school: "거북이초등학교" },
];
// undefined
classmates;
// (3) [{…}, {…}, {…}]
classmates[0];
// {name: '철수', age: 13, school: '다람쥐초등학교'}
classmates[1];
// {name: '영희', age: 8, school: '공룡초등학교'}
classmates[2];
// {name: '훈이', age: 11, school: '거북이초등학교'}
classmates.length;
// 3
classmates[0].school;
// '다람쥐초등학교'
classmates[2].age;
// 11
