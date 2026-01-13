// Print the following pattern for n=5
//     *
//    **
//   ***
//  ****
// *****

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  // This is for adding space
  for (let j = 0; j < n - i - 1; j++) {
    row = row + " ";
  }
  // this is for adding stars
  for (let k = 0; k < i + 1; k++) {
    row += "*";
  }
  console.log(row);
}
