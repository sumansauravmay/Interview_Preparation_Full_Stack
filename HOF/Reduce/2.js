

// Find occurency of fruits
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let findOccurancy = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(findOccurancy);

// Output: { apple: 3, banana: 2, orange: 1 }

