const score =  400//automatically detected 
console.log(score)
const balance =  new Number(100)//explicitly declaring the datatype
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))
const othernumber = 1123.8966
console.log(othernumber.toPrecision(3))
const hundreds = 1000000
console.log(hundreds.toLocaleString())//by default commas are printed in output using usd number system
console.log(hundreds.toLocaleString('en-IN'))//indian standard
//+++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3)) //topvalue
console.log(Math.floor(4.3)) //lowestvalue
console.log(Math.min(2,3,4,5))
console.log(Math.max(2,3,4,5))
console.log(Math.random()) //0-1 value
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const min =10;
const max = 20;
console.log((Math.random()*(max-min+1))+min)
