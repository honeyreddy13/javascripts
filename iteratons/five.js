const coding =  ["js","rb","py","java","cpp"]
coding.forEach(function greet(val) {
    console.log(val)
} )
// coding.forEach(()=>{
//     console.log(item)
// })
function printme(item){
    console.log(item)
}
coding.forEach(printme)
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
const mycoding = [
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"python",
        languagefilename:"py"
    },
    {
        languagename:"r programming",
        languagefilename:"r"
    }
]
mycoding.forEach((item)=> {
    console.log(item.languagename)
});