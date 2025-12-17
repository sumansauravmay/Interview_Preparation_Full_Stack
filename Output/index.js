/*
const a = [1, 2, 3];
a[7] = 6;
console.log(a);
// output: [ 1, 2, 3, <4 empty items>, 6 ]
*/

/*
const obj={
    a:1,
    b:2
}
obj["k"]=5;
console.log(obj)
// output: { a: 1, b: 2, k: 5 }
*/

/*
const obj={
    a:1,
    b:2
}
obj[k]=5;
console.log(obj)
// output: error(k is not defined)
*/

/*
(()=>{
    let a=b=10;
})();
 console.log(b);//10
console.log(a);//a is not defined
*/

/*
function name2(){
    let a=10;
}
name2();
console.log(a)//a is not defined
*/

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
let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);
//output: []
*/

/*
x = 10;
console.log(x);
var x;
//output:10
*/

/*
let a = { x: 1, y: 2 }
let b = a;
b.x = 3;
console.log(a);
console.log(b);

// Output : { x: 3, y: 2 } { x: 3, y: 2 }
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






