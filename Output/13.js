
console.log([11, 2, 31] + [4, 5, 6]);
// Output : "11,2,314,5,6"(The + operator is used for both addition and string concatenation. When you try to concatenate two arrays using the + operator, the arrays are converted to strings and then concatenated together.)


console.log("sh"*5)
console.log("*"*5)

// output: NaN
// output: NaN



function sum(a=5, b=7){
    return a+b;
}
console.log(sum(undefined, 20));
//output: 25


/*
console.log(10 + "5"); //105
console.log("5" + 10); //510

console.log(10 - "5"); //5
console.log("5" - 10); //-5
console.log("JS" - 5); //NaN
*/



/*
let x = 5;
let y = x++;
console.log(y);//5
console.log(x);//6



let u = 5;
let v = ++x;
console.log(v);//6
console.log(u);//6
*/


/*
let f = "8";
let a = 1;
console.log((+f)+a+1);

// output: 10
*/



