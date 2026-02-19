


//remove duplicate
let allNumber = [1, 2, 2, 3, 4, 4, 5];
let findDuplicate = allNumber.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val);
  }
  return acc;
}, []);
console.log(findDuplicate);

// Output: [ 1, 2, 3, 4, 5 ]
