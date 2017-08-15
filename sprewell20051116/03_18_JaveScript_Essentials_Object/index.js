console.log("= Subject08 = Object ====");

var dog = {
  name: 'Buddy',
  breed: 'Golden Retriever',
  weight: 60,

  // Class methods
  bark: function() {
    console.log("Woooooof!!!");
  }
};

console.log(dog);
console.log(dog.breed); // Golden Retriever
console.log(dog["breed"]); // Golden Retriever
console.log(dog.bark()); // Woooooof
