// Reverse the string whose position is even.

let str = "I am suman saurav";
let arr = str.trim().split(" ");

let bag = "";
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      bag += arr[i][j];
    }
  } else {
    bag += arr[i];
  }
  if (i < arr.length - 1) {
    bag += " ";
  }
}
console.log(bag);
// Output: I ma suman varuas
