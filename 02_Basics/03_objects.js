let mysym = Symbol("key1"); //Symbol is a unique and immutable primitive datatype

const myObj = {
  name: "divya",
  age: 24,
  class: "12th",
  [mysym]: "symbol1",
  lastLogindays: ["mon", "tue", "wed"],
  myFunc: function test() {
    console.log("hellow, world");
  },
};

console.log(myObj);
console.log(myObj.age); // prefer this one
console.log(myObj["name"]);

console.log(myObj.myFunc());

myObj.funcNew = function newtest() {
  console.log(`here im ${this.name}`);
};

console.log(myObj.funcNew());
