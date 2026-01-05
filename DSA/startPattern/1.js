// Print a 4x4 square pattern of asterisks(Star)

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*" + " ";
  }
  console.log(row);
}
