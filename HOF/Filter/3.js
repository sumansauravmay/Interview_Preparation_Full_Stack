

// find whose id is 12
let findId = [
  { id: [12, 13, 15], item: "Book", price: 200 },
  { id: [12], item: "Pen", price: 50 },
  { id: [10], item: "Bag", price: 750 },
];

let filterId = findId
  .filter((el) => {
    return el.id.includes(12);
  })
console.log(filterId);


/*
Output: 
[
  { id: [ 12, 13, 15 ], item: 'Book', price: 200 },
  { id: [ 12 ], item: 'Pen', price: 50 }
]
*/

