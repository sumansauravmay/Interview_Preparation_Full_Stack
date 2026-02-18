

/*
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const str = "1,2,3";
console.log(arr1 == str); // JavaScript converts the array to a string.
console.log(arr1 == arr2); // output: They are pointing to different memory locations.
// Output : true, false
*/




const a = {x : 1};
const b = {x : 1};
console.log(a === b); // output: They are pointing to different memory locations.
console.log(a.x === b.x)
// output: false, true


/*
let x = ["a", "b", "c"];
let y = ["a", "b", "c"];
let z = y;
console.log(x == y); // false(Different memory location)
console.log(z == y); // true(Same memory location)
console.log(z === y); // true(Same memory location)
console.log(z == x); // false(Different memory location)
*/


