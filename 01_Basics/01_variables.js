/* let, const, and var are used to declare variables, 
but they behave differently in terms of scope, reassignability, and hoisting.
*/

const accId = 11; // const value will not change
let accEmail = "divya@red.com"; //can change the let value
var accPass = "12345"; // do not use var
let accoutState;
accCity = "jaipur"; // it's a global variable. its not good practice

// accId = 3.1415;   ❌ TypeError: Assignment to constant variable.
accEmail = "dj@red.com";

console.log(accId);
console.table([accId, accEmail, accPass, accoutState, accCity]); // another way of printing
console.log(typeof accCity);
