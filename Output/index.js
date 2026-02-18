

/*
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number
console.log(typeof null); //object
console.log([] == []); //false
console.log([] === []); //false
console.log({} == {}); //false
console.log({} === {}); //false

// Note: They are pointing to different memory locations.

console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
*/


/*
let f = "8";
let a = 1;
console.log((+f)+a+1);

// output: 10
*/



/*
console.log(5 < 6 < 7); //true(5<6 is true which is 1, 1<7 is true)
console.log(7 > 6 > 5); //false(7>6 is true which is 1, 1>5 is false)
console.log(0 == false); // true
console.log(1 == true); // true
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
