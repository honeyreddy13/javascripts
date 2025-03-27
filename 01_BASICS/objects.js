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
const user = new Object()
const user1 = {}
user.id = "12222488"
user.name = "Honey"
user.isloggedin = false
console.log(user)
console.log(user1) //user and user1 are same
const regularuser = {
    email:"honeyreddymudireddy@gmail.com",
    fullname:{
        userfulname:{
            firstname:"Honey",
            secondname:"Reddy"
        }
    }
}
console.log(regularuser.fullname.username.firstname)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
const users = [
    {
        id: "12222488",
        email:"honeyreddymudireddy@gmail.com"
    },
    {
        id: "12222482",
        email:"honeyreddymudireddy@gmail.com"
    },
    {
        id: "12222483",
        email:"honeyreddymudireddy@gmail.com"
    },
]
users[1].email
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(Object.hasOwnProperty('isloggedin'))
const course = {
    coursename : "Hindi",
    price:"999",
    courseinstructor:"Honey"
}
// course.courseinstructor
const {courseinstructor:instructor} = course
console.log(courseinstructor)
console.log(instructor)
// {
//     name:"Honey",
//     coursename = "in hindi",
//     price = "free"
// }