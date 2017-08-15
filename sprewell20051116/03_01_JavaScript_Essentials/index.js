console.log("= Subject03 === ");

var a, b;
a = 'hello';
b = a + ' world';
// b = 'hello world'
console.log(b);

a = 1;
b= a + 5.5
console.log(b);

//
// Subject03 - 03
//
var a = 30;
console.log(a);

// dollar sign as the variable name is allowed
var $_a = 1;
console.log($_a);


console.log("= Subject04 === ");
//
// Subject03 - 04
//
var z = 10 + 4 - 2;
console.log(z); // 12

var z = 10 * 4 / 2;
console.log(z); // 20

var a = "Good " + "Day";
console.log(a); // Good Day

var b = 11 % 3;
console.log(b); // 2

var b = 9 % 3;
console.log(b); // 0

console.log("= Subject05 === ");
// Subject05
function check() {
  // variable a = 10;
  var a = 10;
  // Add 5 to a, and I want this to line to be a comment;
  var b = a + 5;
  return b;
}

console.log("Subject05 check() = " + check());

//
//Subject07
//
console.log("= Subject07 === ");
function print () {
  console.log("A working function");
}
print();

function print2 (a, b, c) {
  console.log(a + b + c);
}
print2("One ", "Two ", "Three");

var multiply = function (a, b) {
  return a * b;
}

var product = multiply(10, 5);
console.log(product);
