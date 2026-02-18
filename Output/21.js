



let a = { x: 1, y: { alpha: 10, beta: 20 } };
let b = { ...a };
b.x = 101;
b.y.alpha = 1001;
console.log(a.x);//1
console.log(b.x);//101
console.log(a.y.alpha);//1001
console.log(b.y.alpha);//1001
// Output : First console log will output "1". Second console log will output "1001".
