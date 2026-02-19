

// find all element in the array
let flatArray = [[1, 2], [5, 7], [3, 4], 3, 7, 9, [2,5]];

let flatternArray = flatArray.reduce((acc, val) => {
  return acc.concat(val);
}, []);
console.log(flatternArray);
//output: [1, 2, 5, 7, 3,4, 3, 7, 9, 2,5]


