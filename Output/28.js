


const person = {
    name: "Suman",
    address: {
        city: "Noida",
        pin: 201301
    }
}

/*

// Shallow Copy
const shallowCopy={...person}
shallowCopy.name="Rahul"
shallowCopy.address.city="Delhi"
console.log(person.name)
console.log(shallowCopy.name)

console.log(person.address.city)
console.log(shallowCopy.address.city)

// Output:
// Suman
// Rahul
// Delhi
// Delhi
*/


/*
// Deep Copy
let deepcopy=JSON.parse(JSON.stringify(person))
deepcopy.name="Rahul"
deepcopy.address.city="Delhi"
console.log(person.name)
console.log(deepcopy.name)

console.log(person.address.city)
console.log(deepcopy.address.city)

// Output:
// Suman
// Rahul
// Noida
// Delhi
*/

