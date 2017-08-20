console.log("Hi!!!!!!! This is 05_JavaScript_Essentials_ES6!!!");
var limit = 100;
console.log(limit);
limit += 100;
console.log(limit);

// use let keywords
console.log("use let keywords");
let limit_let = 100;
console.log(limit_let);
// limit_let += 100;
limit_let = 200;
console.log(limit_let);

console.log("use consts keywords");
const limit_const = 100;
console.log(limit_const);
// limit_let += 100;
// limit_const = 200;
// console.log(limit_const);

const emails = ["email1", "email2", "email3"];
// emails = []; // no re-assign
emails.push("email4") // however you can use "push()" to add elemets" ["email1", "email2", "email3", "email4"];
console.log(emails);
