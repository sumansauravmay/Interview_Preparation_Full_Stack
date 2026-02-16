let arr = [7, 3, 4, 1, 2, 9, 5, 6, 8];


for (let i = 0; i < arr.length; i++) {
  let isFlagged = false;
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      isFlagged = true;
    }
  }
  if (!isFlagged) break;
}
console.log(arr);
// Time complexity: O(n)


/*
let isFlagged = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      isFlagged = true;
    }
  }
  if (!isFlagged) break;
}
console.log(arr);
// Time complexity: O(n**2)
*/

/*
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
     let temp=arr[j];
     arr[j]=arr[j+1];
     arr[j+1]=temp
    }
  }
  
}
console.log(arr);
// Time complexity: O(n**2)
*/

/*
output: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

