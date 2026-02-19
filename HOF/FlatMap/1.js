

// FlatMap: combine the map and flat method to flattern the array after mapping;


let words=["hello world", "hi there", "good morning"];
let flatternWords=words.flatMap((el)=>{
  return el.split(" ");
})
console.log(flatternWords);
// output: [ 'hello', 'world', 'hi', 'there', 'good', 'morning' ]


