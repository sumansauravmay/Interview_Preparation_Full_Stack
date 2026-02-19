

// return element whose id is 5
let el = [
  { id: 2, name: "Suman" },
  { id: 3, name: "Suman" },
  { id: 5, name: "Saurav" },
];
let findElemtn = el.find((element) => {
  return element.id === 5;
});
console.log(findElemtn);

// OUtput: { id: 5, name: 'Saurav' }
