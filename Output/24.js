/*
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const finalObj = Object.assign({}, obj1, obj2);
console.log(finalObj);
// Output: { a: 1, b: 3, c: 4 }(When two or more objects are merged: If keys conflict (i.e., the same key exists in multiple objects), the value from the later object overwrites the earlier one.)
*/




let a = {};
let b = { key: "abc" };
let c = { key: "efg" };

a[b] = 111;
a[c] = 222;
console.log(a[b]);
// Output: 222(In JavaScript, using an object as a key in a normal object turns it into a string. That string is usually "[object Object]". So, two different objects like b and c become the same key -> a[b] = 111 & a[c] = 222 becomes a["[object Object]"] = 111 & a["[object Object]"] = 222. Hence, the second value (222) replaces the first one.)
