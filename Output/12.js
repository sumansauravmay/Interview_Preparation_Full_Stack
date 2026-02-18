
const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 5];
const result = [...arr1, ...arr2];
console.log(result);

// output: [ 1, 2, 3, 4, 6, 7, 5 ]



const person1 = { name: 'xyz', age: 21 };
const person2 = { city: 'abc', ...person1 };
console.log(person2);
// Output : { city: 'abc', name: 'xyz', age: 21 }
