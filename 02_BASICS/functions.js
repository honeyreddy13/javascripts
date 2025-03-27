function saymyname(){
    console.log("H")
console.log("O")
console.log("N")
console.log("E")
console.log("Y")
}
saymyname()
function addtwonumbers(number1, number2){
    console.log(number1 + number2)
}
const result  = addtwonumbers(2,3)
addtwonumbers(3,"4")
console.log("Result",result)
function addtwo(number1, number2){
    // let result  = number1 + number2 
    // return result
    return number1 + number2
}
function loginusermessage(username){
    //if(!username)
    if(username === undefined){
        console.log("PLease enter a username")
        return 
    }
    return '${username} just logged in'
}
loginusermessage("Honey")
console.log(loginusermessage("Honey"))
console.log(loginusermessage())
function calculateprice(val1,val2,...num1){
    return num1
}
console.log(calculateprice(200,400,500,2000))
const user = {
    username : "Honey",
    price : 200
}
function handleobjects(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobjects(user)
handleobjects(
    {
        username:"sam",
        price:200
    }
)
const newarray = [200,400,100,600]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue([200,400,100,600]))
