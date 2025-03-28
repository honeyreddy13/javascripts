const isuserloggedin  = true
// if(isuserloggedin){

// }
//3!=2
//<,>,<=,>=,==,!=,===(strictly equal),!==
if(2=="2"){
    console.log("executed")
}
const temperature = 41
if(temperature<50){
    console.log("less than 50")
}else{
console.log("temperature greater than 50")
}
const score = 200
if(score>100){
    const power = "fly"
    console.log(`User power:${power}`)
}
const balance = 1000
if(balance>500){
    console.log("test")
}
if(balance<500){
    console.log("less than")
}else if(balance<750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else{
    console.log("less than 1200 ")
}
const userloggedin  =  true
const debitcard = true
if(userloggedin && debitcard){
    console.log("allowed")
}
if(userloggedin || debitcard){
    console.log("allowed")
}