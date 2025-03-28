let a = 10
const b = 20
var c = 30
if(true){
    let d = 10
const e = 20
var f = 30
}
console.log(a)
console.log(b)
console.log(c)
//error because as we are declaring variables insde the function trying to access them outside the function
//console.log(d)
let h = 10
if(true){
    let h = 200
    console.log("INNER: ",h)
}
console.log(h)
for(let i=0;i<array.length;i++){
    const element = array[i]
}
function one(){
    const username  = "hitesh"
    function two(){
        const website  = "yotuueb"
        console.log(username)
    }
    console.log(website)
    two()
}
one()
if(true){
    const username = "honey"
    if(username==="honey"){
        const website = "youtube"
        console.log(username+website)
    }
    // console.log(website) error because only local scope
}
// console.log(username) error because scope in only function
// +++++++++++++++++++++intersting+++++++++++++++++++++++++
console.log(addone(5)) //not an error
function addone(value){
    return value+1
}
addtwo(5)
const addtwo = function(num){ // if we are storing in the variable a function it cant be printing when we call befre intialization throws an error
    return num+2
}

