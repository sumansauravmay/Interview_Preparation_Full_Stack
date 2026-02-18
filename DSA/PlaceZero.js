// 2. At place of space put 00. that is between I and a, m and S

let str="I am Suman";
let bag="";
for(let i=0;i<str.length;i++){
if(str[i]==" "){
    bag=bag+"00";
}else{
    bag+=str[i];
}
}
console.log(bag);
// Ouput: I00am00Suman