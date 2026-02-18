
// find all element in the array
let flatArray = [[1, 2], [5, 7], [3, 4], 3, 7, 9, [2, [5, 9]]];
findArray = flatArray.flat(Infinity)
console.log(findArray)
// output: [1,2,5,7,3,4,3,7,9,2,5,9]



// Write a function that takes n number of arrays of integers and returns an array of distinct integers i.e the integers should appear only once among the input arrays. Example: [1,2,3], [2,3,4], [3,4,5] => [1,5]. Note: number of arrays can be n. The function should work when inputs are increased or decreased.

let str = [[1, 2, 3], [2, 3, 4], [3, 4, 5], [5, 6, 7, 8]]
let obj = {};
str = str.flat(Infinity)
for (let i = 0; i < str.length; i++) {
    let num = str[i]
    if (obj[num] == undefined) {
        obj[num] = 1
    } else {
        obj[num] += 1;
    }
}
let arr = [];
for (let key in obj) {
    if (obj[key] == 1) {
        arr.push(key)
    }
}
console.log(arr)
// Output:  [1, 6, 7, 8 ]