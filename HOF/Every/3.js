


let numbers = [
  { id: 2, name: "Suman" },
  { id: 4, name: "Saurav" },
  { id: 6, name: "Rahul" },
];
let checkEven = numbers.every((el) => {
  return el.id == 2;
});
console.log(checkEven);
// output: false


