


// find total price
let prices = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 750 },
];
let getTotalPrice = prices.reduce((acc, val) => {
  return acc + val.price;
}, 0);
console.log(getTotalPrice);

// Output: 1000
