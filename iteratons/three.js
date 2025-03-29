// for of
[" " ," ", " "]
[{},{},{}]
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num)
}
const greetings = "hello world"
for(const greet of greetings){
    console.log(`Each chai is ${great}`)
}
//maps
const map = new Map()
map.set(`IN`,"India")
map.set(`USA`,"Unites states of America")
map.set(`Fr`,"France")
map.set(`IN`,"India")
console.log(map)
for(const key of map){
    console.log(key)
}
for(const [key,value]of map){
    console.log(key,`:-`,value)
}
const myObject = {
    game1:`NFS`
    game2:`Spiderman`
}
for(const[key,value] of myObject){
    console.log(key,`:-`,value)
}
