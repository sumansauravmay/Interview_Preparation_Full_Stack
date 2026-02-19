

// Every: check all element satisfy the condition(return boolean)


// check if all number are even
let numbers = [1, 2, 3, 4, 5];
let checkEven = numbers.every((el) => {
  return el % 2 == 0;
});
console.log(checkEven);
// output: false



