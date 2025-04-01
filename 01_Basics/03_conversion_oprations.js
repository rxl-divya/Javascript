let num = 10;

let someNum = String(num);
console.log(someNum); // 10
console.log(typeof "someNum"); // string

let age = "12aa";
let someAge = Number(age);
console.log(someAge); // NaN Not a number
console.log(typeof someAge); // number

let a = 0;
let value = Boolean(a);
console.log(value); // false
console.log(typeof value); // false

// console.log("1" + 2);     12
// console.log(1 + "2");     12
// console.log("1" + 2 + 2); 122
// console.log(1 + 2 + "2"); 32
