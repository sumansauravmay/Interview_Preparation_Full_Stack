/*
console.log(printName());
function printName() {
  return "Hi my name is Bob";
}
// Output : Hi my name is Bob
*/

/*
console.log(printName2());
let printName2 = () => {
    return "Hi my name is Bob"
}
// output:ReferenceError: Cannot access 'printName' before initialization
*/


/*
console.log(printName3());
var printName3 = () => {
    return "Hi my name is Bob"
}
// output:ReferenceError: Cannot access 'printName' before initialization
*/


/*
console.log(printName());
const printName = () => {
    return "Hi my name is Bob"
}
// output:ReferenceError: Cannot access 'printName' before initialization
*/

/*
function hello(){
console.log(name);
console.log(age);
var name = "Alice";
let age = 21;
}
hello();
// Output : undefined, ReferenceError: can't access lexical declaration 'age' before initialization"
*/