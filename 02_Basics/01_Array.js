let myArr = [1, 2, 3, 4, 5];
myArr.push(6);
myArr.pop();
console.log(myArr);

let newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr);
newArr.shift();
newArr.unshift(9);

console.log(newArr);

let myn1 = ["red", "white", "blue", "pink", "yellow"];

const myn2 = myn1.splice(1, 2); // splice remove elements at give index of array (from 1 to 2)
console.log(myn1);
console.log(myn2);

myn1.splice(1); //remove all elements from 1st index
console.log(myn1);
