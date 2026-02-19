
/*
async function test(){
console.log(1)
await Promise.resolve()
console.log(2)
}
console.log(3)
test()
console.log(4)
*/

/*
output: 
3
1
4
2

This is due to event loop. promise will go in the Macro task

*/



function test() {
    console.log(1)
    Promise.resolve()
    console.log(2)
}
console.log(3)
test()
console.log(4)



/*
Output:
3
1
2
4
*/