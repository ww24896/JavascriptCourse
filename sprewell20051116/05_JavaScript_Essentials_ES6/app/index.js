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

console.log("--- Class 40 - Control with block scorping ---");
let limit_40 = 200;
{
  let limit_40 = 10;
  console.log("backstage limit", limit_40); // 10
}
console.log("overall venue limit", limit_40); // 200

// Test!! "var" 關鍵字不會因為 block 而影響他的 scorping
var limit_40_2 = 200;
{
  var limit_40_2 = 10;
  console.log("backstage limit limit_40_2", limit_40_2); // 10
}
console.log("overall venue limit limit_40_2", limit_40_2); // 10

// const 則會被 scorping 影響
const limit_40_3 = 200;
{
  const limit_40_3 = 10;
  console.log("backstage limit limit_40_3", limit_40_3); // 10
}
console.log("overall venue limit limit_40_3", limit_40_3); // 200


// function 內的 let 關鍵字不會被影響 la
function hello(){
  let message = "Hello";
  console.log(message);
}

function greeting(){
  let message = "How are you";
  console.log(message);
}

hello();
greeting();

console.log("--- Class 41 - Template and Literals");
// Template Literals
let a = `good`;
let greeting_41 = `good morning`;
let greeting_41_2 = `${a} morning`; // template String
let greeting_41_3 = a + " " + "morning"; // of course you can use this
console.log(a);
console.log(greeting_41);
console.log(greeting_41_2);

let b = `birthday`;
let c = `Happy ${b}`;
console.log(c);

// let a = "good";
// let greeting_41 = "good morning";
// let greeting_41_2 = "${a} morning";
// console.log(a);
// console.log(greeting_41);
// console.log(greeting_41_2);
