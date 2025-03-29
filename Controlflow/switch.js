let key = 1
switch(key){
    case 1:
        console.log("1")
        break
    default:
        break

}
month = 3
switch(month){
    case 1:
        console.log("Jan")
        break
    case 2:
        console.log("Feb")
        break
    case 3:
        console.log("Mar")
        break
    case 4:
        console.log("Apr")
        break
    case 5:
        console.log("May")
        break
    default:
        console.log("No month exists with the number")
        break
}
const useremail  = ""
if(useremail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}
//falsy values
// false,0,-0,BigInt,0n,"",null,undefined,NaN
//truthy values
//"0",'false'," ",[],{},function(){}
if(useremail.length===0){
    console.log("Array is empty")
}
const emptyobj ={}
if(object.keys(emptyobj).length===0){
    console.log("Object is empty")
}
//Nullish Coalescing Operator(?):null undefined
let val1
val1 = 5??10
console.log(val1)
val1 = null??10
console.log(val1)
val1 = undefined ?? 15
console.log(val1)
val1 = null ?? 10 >> ?? 20
console.log(val1)
//ternary operator
condition? true: false
const iceteaprice = 100
iceteaprice >= 80? console.log("less than 80") :  console.log("moe than 80")