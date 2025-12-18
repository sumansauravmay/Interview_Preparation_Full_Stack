let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 15;
let left = 0;
let right = arr.length - 1;
while (left < right) {
  let sum = arr[left] + arr[right];
  if (sum === target) {
    console.log(left, right);
    break;
  } else if (sum < target) {
    left++;
  } else {
    right--;
  }
}
