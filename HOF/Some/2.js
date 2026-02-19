


let numbers = [{id:1, name:"Suman"}, {id:2, name:"Saurav"}, {id:3, name:"Rahul"}, {id:4, name:"Neha"}, {id:5, name:"Aman"}];
let checkCond=numbers.some(((el)=>{
  return el.id==5;
}));

console.log(checkCond)
// output: true


