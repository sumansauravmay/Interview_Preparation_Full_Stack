

//find occurency
let checkNumber = [1, 3, 5, 9, 3, 6, 6, 9, 6];
let findOccurancy = checkNumber.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(findOccurancy);

// Output: { '1': 1, '3': 2, '5': 1, '6': 3, '9': 2 }
