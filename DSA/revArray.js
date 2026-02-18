// Reverse the array from k;

let nums=[1,2,3,4,5,7,6,8];
let k=3;
let arr1=[];
let arr2=[];

for(let i=0;i<=k;i++){
    arr1.push(nums[i])
}
for(let j=k+1;j<nums.length;j++){
    arr2.push(nums[j])
}
let arr=[...arr2,...arr1];
console.log(arr);