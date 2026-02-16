setTimeout(() => {
    console.log("1")
}, 300)


Promise.resolve(1).then(function resolve() {
    console.log("2")
})

console.log("3")



setTimeout(() => {
    console.log("4")
}, 0)

console.log("5")

/*
output:
3
5
2
4
1
*/


