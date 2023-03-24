const jasonData = {
  name: "Jason",
  age: 25,
  gender: "Male",
};
// undefined
jasonData;
// {name: 'Jason', age: 25, gender: 'Male'}
jasonData.name;
// 'Jason'
jasonData["name"];
// 'Jason'
let name = "age";
// undefined
jasonData[name];
// 25
let key = "gender";
// undefined
jasonData[key];
// 'Male'
jasonData["gender"];
// 'Male'

Object.keys(jasonData);
// (3) ['name', 'age', 'gender']
Object.values(jasonData);
// (3) ['Jason', 25, 'Male']
let result = Object.keys(jasonData);
// undefined
result.includes("name");
// true
result.includes("hobby");
// false
result.indexOf("name");
// 0
result.indexOf("hobby");
// -1
result.length;
// 3
jasonData.favoriteFood = ["rice", "kimchi", "noodle"];
// (3) ['rice', 'kimchi', 'noodle']
jasonData;
// {name: 'Jason', age: 25, gender: 'Male', favoriteFood: Array(3)}
Object.keys(jasonData);
// (4) ['name', 'age', 'gender', 'favoriteFood']
Object.values(jasonData);
// (4) ['Jason', 25, 'Male', Array(3)]
