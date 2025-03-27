const name  = "Honey"
const age = 50
console.log(name+age+"value")
console.log(`Hello my name is ${name} and my repocount is ${age}`)
const gamename =  new String("Honey") //key value pairs
console.log(gamename)
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(3))
console.log(gamename.indexOf('t'))
const newstring = gamename.substring(0,4)
console.log(newstring)
const anotherstring = gamename.substring(-4,0)//we can give negative values in the slice it will be starting from the reverse
console.log(anotherstring)
const string1 = "   Honey     "
console.log(string1)
console.log(string1.trim())
const url = "https://honey.com/honey%20reddy"
console.log(url.replace('%20','-'))
console.log(url.includes('honey'))
console.log(gamename.split('-'))
