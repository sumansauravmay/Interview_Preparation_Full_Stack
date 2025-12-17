/*
// return element in the array
let data=[1, 2, 3, 4];

let x=data.map((el)=>{
    return el;
});
console.log(x);
*/

/*
const a = [1, 2, 3]
const b = a.map(ele=>ele>2)
console.log(b);
// output:[ false, false, true ]
*/


/*
const a = [1, 2, 3]
const b = a.filter(ele=>ele*2)
console.log(b);
// output: [ 1, 2, 3 ]
*/

/*
const a = [1, 2, 3]
const b = a.forEach(ele=>ele>2)
console.log(b);
// output: undefined
*/





/*
// find even number
let filterEven=[10, 15, 20, 25, 30]
let number=filterEven.filter((el)=>{
    return el%2==0
})
console.log(number);
*/

/*
// Find Sum
let number = [5, 10, 15];
let findSum = number.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(findSum);
*/

/*
// Find occurency of fruits
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let findOccurancy = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(findOccurancy);
*/

/*
//find occurency
let checkNumber = [1, 3, 5, 9, 3, 6, 6, 9, 6];
let findOccurancy = checkNumber.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(findOccurancy);
*/

/*
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
*/

/*
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
*/

/*
//remove duplicate
let allNumber = [1, 2, 2, 3, 4, 4, 5];
let findDuplicate = allNumber.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val);
  }
  return acc;
}, []);
console.log(findDuplicate);
*/

/*
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
*/

/*
// find all element in the array
let flatArray = [[1, 2], [5, 7], [3, 4], 3, 7, 9, [2,5]];

let flatternArray = flatArray.reduce((acc, val) => {
  return acc.concat(val);
}, []);
console.log(flatternArray);
//output: [1, 2, 5, 7, 3,4, 3, 7, 9, 2,5]
*/



