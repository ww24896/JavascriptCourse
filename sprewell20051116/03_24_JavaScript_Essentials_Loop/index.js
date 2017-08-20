console.log("= Subject24 = For loop ====");

var names = ["Frodo", "Sam", "Merry", "Pippin"];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("= Subject25 = while loop ====");

var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

console.log("= Subject25 = do-while loop ====");

var i = 0;
do {
  console.log(names[i]);
  i++
} while (i < 0);

function count(x)
{
  var numbers = [];
  if (x % 2 == 0) { // TODO check that x is even

    for (var i = 0; i < x; i++) {
      if (i % 2 == 0) {
        numbers.push(i)
      }
    }

  } else {
    for (var i = 0; i < x; i++) {
      if (i % 2 != 0) {
        numbers.push(i)
      }
    }
  }
  return numbers;
}

console.log(count(11));
