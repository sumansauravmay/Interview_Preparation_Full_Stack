


//Get Names of Adults
let nameAge = [
  { name: "Rahul", age: 17 },
  { name: "Aman", age: 21 },
  { name: "Neha", age: 18 },
];
let findAdult = nameAge.reduce((acc, val) => {
  if (val.age >= 18) {
    acc.push(val.name);
  }
  return acc;
}, []);
console.log(findAdult);
// Output: [ 'Aman', 'Neha' ]

