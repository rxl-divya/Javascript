function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website); // get error: variable website  scope is within function two()

  two();
}

one();

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(10)); // call this function even before and after its declaration

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(10)); // cannot call this function before its declaration
const addTwo = function addTwo(num) {
  return num + 2;
};
console.log(addTwo(10));
