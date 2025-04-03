const fruits = ["mango", "apple", "kiwi"];
const flowers = ["rose", "lily", "tuberose"];
// fruits.push(flowers);
// console.log(fruits);   // [ 'mango', 'apple', 'kiwi', [ 'rose', 'lily', 'tuberose' ] ]

let allItems = fruits.concat(flowers);
console.log(allItems); // [ 'mango', 'apple', 'kiwi', 'rose', 'lily', 'tuberose' ]

// spread operator (PREFER THIS)
let newItems = [...fruits, ...flowers];
console.log(newItems); // [ 'mango', 'apple', 'kiwi', 'rose', 'lily', 'tuberose' ]

const arr = ["thor", "Ironman", [1, 2, 3], "spiderman", [3, 4, 5, [9, 6, 8]]];

console.log(arr.flat(Infinity)); // make all elements as one list

console.log(Array.isArray("div")); // False
console.log(Array.from("divya")); // [ 'd', 'i', 'v', 'y', 'a' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
