

// Some: check at least one element satisfy the condition(return boolean)

let numbers = [1, 3, 5, 7, 8];
let checkCond=numbers.some(((el)=>{
  return el==5;
}));
console.log(checkCond);
// output: true



