const myObject = {
    js:'Javascript',
    cpp:`c++`,
    rb:`ruby`,
    swift:`swift by apple`
}
for(const key in myObject){
    console.log(myObject[key])
}
const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key)
}
const map = new Map()
map.set(`IN`,"India")
map.set(`USA`,"Unites states of America")
map.set(`Fr`,"France")
map.set(`IN`,"India")
//no output
for(const key in map){
    console.log(key)
}
