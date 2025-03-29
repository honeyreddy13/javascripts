const mynums = [1,2,3]
const mytotal = mynums.reduce(function(acc,curval){
    console.log(`acc:${acc} and currval : ${curval}`)
    return acc +curval
},0)
console.log(mytotal)
const my = mynums.reduce((acc,curr)=>acc+curr,0)
console.log(my)
const shoppingcart =  [
    {
        itemname : "js course",
        price:2999
    },
    {
        itemname : "pyhton course",
        price :3999
    },
    {
        itemname : "r programmign",
        price:4999
    }
]
const pricetopay = shoppingcart.reduce((Acc,item)=>Acc+item.price,0)
console.log(pricetopay)
