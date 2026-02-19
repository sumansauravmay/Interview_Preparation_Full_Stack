
// Find: This return the value when it is found and undefined if none.

// Find the first value greater than 3
let element = [2, 3, 4, 6];
let findEl = element.find((el) => {
  return el > 3;
});
console.log(findEl);

// Output: 4


