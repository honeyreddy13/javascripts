let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)
let mycreateddate = new Date(2023,0,23)
console.log(mycreateddate.toDateString())
let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000))
let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())
newdate.toLocaleString('default',{
     weekday:"long"
})