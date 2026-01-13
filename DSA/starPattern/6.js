// print the following pattern for n=5
// 1
// 10
// 101
// 1010
// 10101

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  let swich = 1;
  for (let j = 0; j < i + 1; j++) {
    row += swich;
    if (swich == 1) {
      swich = 0;
    } else {
      swich = 1;
    }
  }

  console.log(row);
}
