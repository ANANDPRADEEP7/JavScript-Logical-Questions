// zero for last

let arr=[1,2,3,4,0,3,0,2,0,0,1,2,3]
let result=[]
let zero=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
        zero++
    }else{
        result.push(arr[i])
    }
}
for(let i=0;i<zero;i++){
    result.push(0)
}
console.log(result)
