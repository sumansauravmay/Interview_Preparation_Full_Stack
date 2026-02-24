

// Fibonacci Series


// Using iteratiove approach

function fibo(val) {
    if (val <= 1) {
        return val;
    }

    let first = 0;
    let second = 1;
    let arr = [0, 1]
    for (let i = 2; i < val; i++) {
        let temp = first + second;
        first = second;
        second = temp;
        arr.push(second)
    }
    return arr
}
let x = fibo(5);
console.log(x);

//Output:[0,1,1,2,3]





// Using recursion

/*
function fibon(val) {
    if (val <= 1) {
        return val;
    }

    return fibon(val - 1) + fibon(val - 2);
    
}
let y = fibon(7);
console.log(y);

//Output: 13

*/


