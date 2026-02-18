// 1. Write a function that takes n number of arrays of integers and returns an array of distinct integers i.e the integers should appear only once among the input arrays. Example: [1,2,3], [2,3,4], [3,4,5] => [1,5]. Note: number of arrays can be n. The function should work when inputs are increased or decreased.

function distinctVeal(arr){
    let str=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            str.push(arr[i][j])
        }
    }
    let obj={};
    for(let i=0;i<str.length;i++){
        let num=str[i];
        if(!obj[num]){
            obj[num]=1;
        }else{
            obj[num]+=1;
        }
    }
    let uniqueValue=[];
    for(let key in obj){
        if(obj[key]==1){
            uniqueValue.push(key)
        }
    }
    return uniqueValue;
}

let x=distinctVeal([[1,2,3], [2,3,4], [3,4,5],[5,6,7,8]]);
console.log(x.map(Number));

//Ouput: [ 1, 6, 7, 8 ]







