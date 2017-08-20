console.log("= Subject21 = Comparison Operators ====");

var a = false;
console.log(typeof a);
console.log(a);

console.log("5 == 5");
var b = 5 == 5;
console.log(b);

console.log("5 == 7");
var b = 5 == 7;
console.log(b);

console.log("5 >= 7");
var b = 5 >= 7;
console.log(b);

var x = 10;

if (8 > x) {
  console.log("8 is greater");
}  else if (15 > x){
  console.log("15 is greater");
} else {
  console.log("8 is not greater");
}


var check = function (number) {
  if (number % 2 == 0) {
    console.log(number + " is even!");
  } else {
    console.log(number + " is odd!");
  }
}

check(4);
check(7);
check(10);
