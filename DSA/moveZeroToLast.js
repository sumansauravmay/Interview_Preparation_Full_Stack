let input=[1, 5, 2, 0, 5, 32, 0, 1, 5, 0, 6, 4]


for(let i=0;i<input.length;i++){
    if(input[i]==0){
        input.push(input[i])
        input.splice(i, 1)
    }
}

console.log(input)




/*
let arr=[];
let count=0;
for(let i=0; i<input.length;i++){
    if(input[i]!=0){
        arr.push(input[i])
    }else{
        count++;
    }
}

for(let i=0;i<count;i++){
    arr.push(0)
}

console.log(arr)
*/

