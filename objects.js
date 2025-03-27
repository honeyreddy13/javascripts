//objects can be declared in literals and constructors
//singleton-->one type of object
//object literals
//object.create
const jsuser = {
    name:"Honey",
    age:19,
    "full_name":Mudireddy,
    location:"Hyderabad",
    email:"honeyreddymudireddy@gmail.com",
    isLoggedin:false,
    lastloggedindays:["Monday","Saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full_name"])
jsuser.email = "Honeyreddymudireddy@gmail.com"
Object.freeze(jsuser)
jsuser.email = "honey@gmail.com"
console.log(jsuser)
jsuser.greetings = function(){
    console.log("Hello js user")
}
jsuser.greetings2 = function(){
    console.log(`Hello js user,${this.name}`)
}
console.log(jsuser.greetings)//undefined
console.log(jsuser.greetings())//output
