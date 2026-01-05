// return second largest number in an array

let arr = [8, 2, 1, 9, 3, 7, 2];
if (arr.length < 2) {
  console.log("null");
  return;
}
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}
console.log(secondLargest);
