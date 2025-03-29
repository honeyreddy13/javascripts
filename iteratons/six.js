const coding = ["js","ruby","java","python","cpp"]
const values = coding.forEach((item)=>{
    console.log(item)
    // return item undefined
}
)
console.log(values);
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newnums = myNums.filter((num)=>num>4)
console.log(newnums)
const news = myNums.filter((num)=>{
    return  num>4
})
console.log(news)
const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)
let usebooks =  books.filter ((bk)=>bk.genre === `History`)
userbooks =  books.filter((bk) =>{
    return bk.publish >= 1995 && bk.genre === "history"
})
console.log(userbooks)
