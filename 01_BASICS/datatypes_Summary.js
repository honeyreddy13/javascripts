// there are mainly 2 types of datatypes
//-->primitive - 7 types - String,NUmber,Boolean,NULL,undefined,Symbol,BigInt
//--> non primitive ( reference type) Array,Objects,Fucntions
//Java script is a dynamic language
const score = 100
const isloggedin  = false
let useremail 
const id = Symbol("123")//this is different
const anotherid  = Symbol("123")//this si different
console.log(id==anotherid)
const herors =[ "Shaktman","balveer","hii"]
let myobj = {
    name:"honey",
    age:22,
}
const myfunciton = function(){
    console.log("Hello world")
}
console.log(typeof bigNumber)
// memory in java script
//Stack memory(Primitive) and HeapMemory(Non-primitive)
let myname  = "Honey"
let anothername = myname
console.log(anothername)
anothername = "chaoaurcode"
console.log(anothername)
let user = {
    email : "honeyreddymudireddy@gmail.com"
    upi : "userybl"
}
let user2 = user
