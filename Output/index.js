

/*
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number
console.log(typeof null); //object
console.log([] == []); //false
console.log([] === []); //false
console.log({} == {}); //false
console.log({} === {}); //false

console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
*/



/*
x = 10;
console.log(x);
var x;
//output:10
*/



/*
for(var i = 0; i < 10; i++){
    setTimeout(function(){
      console.log("value is " + i);
  })
}

// Output: 10 times, "value is 10"
*/

/*
for(let i = 0; i < 10; i++){
    setTimeout(function(){
      console.log("value is " + i);
  })
}
// output: value is 0,1,2,3,4,5,6,7,8,9
*/

/*
function hello() {
  console.log("1");
    setTimeout(() => {
        console.log("2");
    })
  console.log("3");
}
hello();
// output: 1, 3, 2
*/

/*
let f = "8";
let a = 1;
console.log((+f)+a+1);

// output: 10
*/

/*
let a = 10;
if (true) {
  let a = 20;
  console.log(a, "inside");
}
console.log(a, "outside");

// Output: 
// 20 inside
// 10 outside
*/

/*
var a = "xyz";
var a = "pqr";
console.log(a)
// output: pqr
*/

/*
const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 5];
const result = [...arr1, ...arr2];
console.log(result);

// output: [ 1, 2, 3, 4, 6, 7, 5 ]
*/

/*
const person1 = { name: 'xyz', age: 21 };
const person2 = { city: 'abc', ...person1 };
console.log(person2);
// Output : { city: 'abc', name: 'xyz', age: 21 }
*/

/*
console.log(5 < 6 < 7); //true(5<6 is true which is 1, 1<7 is true)
console.log(7 > 6 > 5); //false(7>6 is true which is 1, 1>5 is false)
console.log(0 == false); // true
console.log(1 == true); // true
*/

/*
console.log([11, 2, 31] + [4, 5, 6]);
// Output : "11,2,314,5,6"(The + operator is used for both addition and string concatenation. When you try to concatenate two arrays using the + operator, the arrays are converted to strings and then concatenated together.)
*/

/*
console.log({} == {}); // false
console.log({} === {}); // false
// output: They are pointing to different memory locations.
*/

/*
let x = 5;
let y = x++;
console.log(y);//5
console.log(x);//6
*/

/*
let x = 5;
let y = ++x;
console.log(y);//6
console.log(x);//6
*/

/*
console.log('apple'.split(''));
// Output : [ 'a', 'p', 'p', 'l', 'e' ]
*/

/*
const arr = [2,3,5,2,8,10,5];
console.log(arr.indexOf(5))
// output: 2
*/

/*
const array = [8, 18, 28, 38];
const result = array
  .map((element) => element + 2)
  .filter((element) => element > 25);
console.log(result);
//output: [ 30, 40 ]
*/

/*
function checkValue(value) {
  var result = Array.isArray(value);
  console.log(result);
}
checkValue([1, 2, 3]);
//output: true
*/

/*
function sum(a=5, b=7){
    return a+b;
}
console.log(sum(undefined, 20));
//output: 25
*/

/*
console.log(10 + "5"); //105
console.log("5" + 10); //510

console.log(10 - "5"); //5
console.log("5" - 10); //-5
console.log("JS" - 5); //NaN
*/

/*
console.log(printName());
function printName() {
  return "Hi my name is Bob";
}
// Output : Hi my name is Bob
*/

/*
console.log(printName());
const printName = () => {
    return "Hi my name is Bob"
}
// output:ReferenceError: Cannot access 'printName' before initialization
*/

/*
function hello(){
console.log(name);
console.log(age);
var name = "Alice";
let age = 21;
}
hello();
// Output : undefined, ReferenceError: can't access lexical declaration 'age' before initialization"
*/

/*
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const str = "1,2,3";
console.log(arr1 == str);
console.log(arr1 == arr2);
// Output : true, false
*/

/*
const a = {x : 1};
const b = {x : 1};
console.log(a === b);
console.log(a.x === b.x)
// output: false, true
*/

/*
const arr = [10, -1, 2];
arr.sort((a, b) => a - b);
console.log(arr);
// Output : [-1, 2, 10]
*/

/*
const arr = [11, 0, '', false, 2, 1];
const filtered = arr.filter(Boolean);
console.log(filtered);
// Output: [ 11, 2, 1 ]
*/

/*
var x = 0;
var y = 10;
if(x){
  console.log(x);
}
if(y){
  console.log(y);
}
// Output : 10
*/

/*
const obj = {
var1: 1,
var2: 2
};
const { var1, var2 } = obj;
console.log(var1, var2);
// Output : 1, 2
*/

/*
const user = { 
name: "Surbhi dighe", 
country: "India" 
};
const { name: fullname, country } = user;
console.log(fullname);
console.log(name);
// Output : Surbhi Dighe, ReferenceError: name is not defined
*/

/*
const person = {
  firstName: 'Surbhi',
};
const { lastName="dighe" } = person;
console.log(lastName);
//Output : dighe
*/

/*
const person = {
  firstName: 'Surbhi',
};
const { firstName="Henry"} = person;
console.log(firstName);
// Output : Surbhi(Henry is like default value)
*/

/*
var a = 10;
let a = 20;
console.log(a)
//Output : SyntaxError: Identifier 'a' has already been declared
*/

/*
const arr = ["A","B","C","D","E"]
console.log(Object.keys(arr)); 
//output: [ '0', '1', '2', '3', '4' ]
*/

/*
function modify(obj) {
    obj.name = "Updated";
}
let person = { name: "Original" };
modify(person);
console.log(person.name);

// function reassign(obj) {
//     obj = { name: "New Object" };
// }
// reassign(person);
console.log(person.name); 
*/

/*
let a={ x:1, y: {alpha:10,beta:20} };
let b = {...a};
b.x=101;
b.y.alpha=1001;
console.log(a.x);
console.log(a.y.alpha);
// Output : First console log will output "1". Second console log will output "1001".
*/

/*
console.log('Start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');
// Output : The console will output in this order -> Start, End, Promise, setTimeout
*/

/*
var array = [1,2,3,4,5];
delete array[2];
console.log(array.length);
// Output: 5( "delete" removes the element but does not reindex the array or change its length. It leaves undefined holes in the array)
*/

/*
let x = ["a", "b", "c"];
let y = ["a", "b", "c"];
let z = y;
console.log(x == y); // false(Different memory location)
console.log(z == y); // true(Same memory location)
console.log(z == x); // false(Different memory location)
*/

/*
let x; 
console.log(x);
x = 20;
console.log(x);
x = "John";
console.log(x);
// Output: undefined, 20, John
*/

/*
let text;
switch (1) {
  case 0:
    text = "This is zero";
    break;
  case 1:
    text = "This is one";
  case 2:
    text = "This is two";
    break;
  default:
    text = "No matches found!";
}
console.log(text);

// Output: This is two(switch(1) means JS looks for a case that matches 1. It finds case 1 & sets text as "This is one". But there is no break, so it keeps going (falls through) into case 2 & overwrites the value.)
*/

/*
const user = {
    name: 'Aman Bhoria!',
    logMessage() {
        console.log(this.name); // What is logged? 
    }
}; 
setTimeout(user.logMessage, 1000);
// Output: Undefined(We've passed the reference in setTimeout not the actual function so as a result it doesn't have the user's context while executing. To get the name we've to pass a callback like: setTimeout(() => user.logMessage(), 1000);)
*/

/*
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const finalObj = Object.assign({}, obj1, obj2);
console.log(finalObj);
// Output: { a: 1, b: 3, c: 4 }(When two or more objects are merged: If keys conflict (i.e., the same key exists in multiple objects), the value from the later object overwrites the earlier one.)
*/

/*
let a = {};
let b = { key: "abc" };
let c = { key: "efg" };

a[b] = 111;
a[c] = 222;
console.log(a[b]);
// Output: 222(In JavaScript, using an object as a key in a normal object turns it into a string. That string is usually "[object Object]". So, two different objects like b and c become the same key -> a[b] = 111 & a[c] = 222 becomes a["[object Object]"] = 111 & a["[object Object]"] = 222. Hence, the second value (222) replaces the first one.)
*/



/*
function printName(firstName, lastName) {
    firstName = "Aman";
    lastName = "Bhoria";
    // return firstName + " " + lastName;
    return arguments[0] + " " + arguments[1];
}

let name = printName("John", "Doe");
console.log(name)
// Output: Aman Bhoria
*/
