function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

// function using Spread operator

function allVariables(...num) {
  return num;
}

console.log(allVariables(100, 200, 300, 400));

function testSpread(num1, num2, ...num3) {
  console.log(`first num value ${num1}, second value ${num2}`);
  return num3;
}
console.log(testSpread(1, 2, 3, 4, 5, 6));

// handle object

const user = {
  username: "hitesh",
  age: 19,
};

function getDetails(myobj) {
  console.log(`my name is ${myobj.username} and my age is ${myobj.age}`);
}

getDetails(user);
getDetails({ username: "divya", age: 20 }); // able to pass obj direectly

function getArray(myarr) {
  console.log(myarr);
}
getArray([100, 200, 300]);
