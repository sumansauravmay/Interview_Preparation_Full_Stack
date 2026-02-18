// Reverse the numbers given in the the bag. types is number initially

let nums=123456;
let str=nums.toString();
let bag="";
for(let i=str.length-1;i>=0;i--){
bag+=str[i];
}
console.log(bag);