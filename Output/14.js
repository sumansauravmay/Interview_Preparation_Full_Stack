
console.log('apple'.split(''));
// Output : [ 'a', 'p', 'p', 'l', 'e' ]

const arr = [2,3,5,2,8,10,5];
console.log(arr.indexOf(5))
// output: 2





const array = [8, 18, 28, 38];
const result = array
  .map((element) => element + 2)
  .filter((element) => element > 25);
console.log(result);
//output: [ 30, 40 ]
