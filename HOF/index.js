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

// Find: This return the calue when it is found and undefined if none.
/*
// Find the first value greater than 3
let element = [2, 3, 4, 6];
let findEl = element.find((el) => {
  return el > 3;
});
console.log(findEl);
*/

/*
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
*/

// FindIndex=> Return the index of Element and return single value and -1 if not found.
/*
// Find the index of first element greater than 1
let arrEle=[1,2,3,4,5,6];
let findIndex=arrEle.findIndex((el)=>el>1);
console.log(findIndex);
*/

/*
// Find the index of element whose id is 1
let users = [
  { id: 1, name: "Suman" },
  { id: 4, name: "Saurav" },
  { id: 3, name: "Rahul" },
];
let findUserIndex = users.findIndex((el) => el.id == 1);
console.log(findUserIndex);
// output: 0
*/

/*
let users = [
  { id: 1, name: "Suman" },
  { id: 4, name: "Saurav" },
  { id: 3, name: "Rahul" },
];
let findUserIndex = users.findIndex((el) => el.id == 10);
console.log(findUserIndex);
// output: -1
*/

// Some: check at least one element satisfy the condition(return boolean)
/*
let numbers = [1, 3, 5, 7, 8];
let checkCond=numbers.some(((el)=>{
  return el==5;
}));
console.log(checkCond);
output: true
*/

/*
let numbers = [{id:1, name:"Suman"}, {id:2, name:"Saurav"}, {id:3, name:"Rahul"}, {id:4, name:"Neha"}, {id:5, name:"Aman"}];
let checkCond=numbers.some(((el)=>{
  return el.id==5;
}));

console.log(checkCond)
output: true
*/

// Every: check all element satisfy the condition(return boolean)

/*
// check if all number are even
let numbers = [1, 2, 3, 4, 5];
let checkEven = numbers.every((el) => {
  return el % 2 == 0;
});
console.log(checkEven);
output: false
*/

/*
let numbers = [
  { id: 2, name: "Suman" },
  { id: 4, name: "Saurav" },
  { id: 6, name: "Rahul" },
];
let checkEven = numbers.every((el) => {
  return el.id == 2 || el.id == 4 || el.id == 6;
});
console.log(checkEven);
output: true
*/

/*
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
*/

// sort: make the element in the ascending or descending order;
/*
let arrNum=[5,6,2,1,9,0];
let sortNum=arrNum.sort((a,b)=>{
  return a-b;
})
console.log(sortNum)
*/

// FlatMap: combine the map and flat method to flattern the array after mapping;

/*
let words=["hello world", "hi there", "good morning"];
let flatternWords=words.flatMap((el)=>{
  return el.split(" ");
})
console.log(flatternWords);
// output: [ 'hello', 'world', 'hi', 'there', 'good', 'morning' ]
*/

/*
let words=["hello world", "hi there", "good morning"];
let flatternWords=words.flatMap((el)=>{
  return el.split("");
})

console.log(flatternWords)
// output: [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', 'h', 'i', ' ', 't', 'h', 'e', 'r', 'e', 'g', 'o', 'o', 'd', ' ', 'm', 'o', 'r', 'n', 'i', 'n', 'g' ]
*/

/*
let words = ["hello world", "hi there", "good morning"];
let flatternWords = words
  .flatMap((el) => {
    return el.split(" ");
  })
  .flatMap((el) => {
    return el.split("");
  });
console.log(flatternWords);

// output: [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 'h', 'i', 't', 'h', 'e', 'r', 'e', 'g', 'o', 'o', 'd', 'm', 'o', 'r', 'n', 'i', 'n', 'g' ]
*/





