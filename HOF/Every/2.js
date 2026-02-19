


let numbers = [
  { id: 2, name: "Suman" },
  { id: 4, name: "Saurav" },
  { id: 6, name: "Rahul" },
];
let checkEven = numbers.every((el) => {
  return el.id == 2 || el.id == 4 || el.id == 6;
});
console.log(checkEven);
// output: true


