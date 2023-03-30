let ranking = ["Jason", "Alice", "Chris"];
// undefined
console.log(ranking);
// (3) ['Jason', 'Alice', 'Chris']
// undefined
console.log(ranking[0]);
// Jason
// undefined
console.log(ranking[1]);
// Alice
// undefined
console.log(ranking.length);
// 3
// undefined
ranking.push("Jane");
// 4
ranking;
// (4) ['Jason', 'Alice', 'Chris', 'Jane']
ranking.pop();
// 'Jane'
ranking;
// (3) ['Jason', 'Alice', 'Chris']
ranking.includes("Chris");
// true
ranking.includes("Jane");
// false
ranking.indexOf("Chris");
// 2
ranking.indexOf("Jane");
// -1
