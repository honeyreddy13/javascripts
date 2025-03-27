const array =[0,1,2,3,4,5,"true","hitesh"]
console.log(array)
const myherroes = ["shaktimna","nagaraj"]
const myarray2 = new Array(1,2,3,4)
console.log(myarray2[1])
//array methods
myarray2.push(7)
console.log(myarray2)
myarray2.unshift(9)
myarray2.shift()
console.log(myarray2.includes(9))
console.log(myarray2.indexOf(9))
const newarr = myarray2.join()
console.log(myarray2)
console.log(typeof newarr)
const my1 = myarray2.slice(1,3)
console.log(my1)
const my2 = myarray2.splice(1,3)
console.log(my2)
const marvelhero = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batna"]
marvelhero.push(dc)
console.log(marvelhero)
marvelhero.concat(dc)
console.log(marvelhero)
const all_hero = [...marvelhero,...dc]
console.log(all_hero)
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = another_array.flat(Infinity)
console.log(realanotherarray)
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))//empty string
let score1 = 100
let score2 = 300
let score3 = 400
console.log(Array.of(score1,score2,score3))

