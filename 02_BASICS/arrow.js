const user = {
    username:"Honey",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
//this refers to current context
user.welcomemessage()
user.username = "Sam"
user.welcomemessage()
console.log(this)//when refering to node environment it is empty
// function chai(){
//     let username = "Honey"
//     console.log(this.username)
// }
const chai  = () =>{
    let username = "Honey"
    console.log(this.username)
}
chai()
const addtwo = (num1,num2)=>{
    return num1+num2
}
//implicit return 
// const addtwo = (num1,num2) => num1+num2
//const addtwo = (num1,num2) => ({username:"Honey"})
addtwo(2,3)
console.log(addtwo(2,3))
const myarray = [2,5,3,7,8]
