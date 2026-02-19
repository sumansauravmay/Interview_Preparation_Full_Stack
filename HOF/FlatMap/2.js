


let words=["hello world", "hi there", "good morning"];
let flatternWords=words.flatMap((el)=>{
  return el.split("");
})

console.log(flatternWords)

/*
Output:
[
  'h', 'e', 'l', 'l', 'o', ' ',
  'w', 'o', 'r', 'l', 'd', 'h',
  'i', ' ', 't', 'h', 'e', 'r',
  'e', 'g', 'o', 'o', 'd', ' ',
  'm', 'o', 'r', 'n', 'i', 'n',
  'g'
]
*/

