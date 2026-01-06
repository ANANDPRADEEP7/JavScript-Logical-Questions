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


let obj={
    name:"ANAND",
    age:18
}
obj.country="INDIA"
console.log(obj)


const obj={
    name:"ANAND",
    age:18,
    country:"INDIA"
}
const keyArr=Object.keys(obj)
console.log(keyArr)

const obj={
    name:"ANAND",
    age:18,
    address:{
        city:"palakkad",
        country:"india"
    }
}
const clone=structuredClone(obj)
clone.address.city="Kochi"

console.log(obj.address.city)


const arr=[1,2,3,4,5,3,7,1,3]
let freq={}

for(let item of arr){
    freq[item]=(freq[item]||0)+1
}
console.log(freq)


