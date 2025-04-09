#Projects related to DOM
#project link
[click here]()
#Solution code
##PROJECT1
```javascript
console.log("hitesh")
```
```
const button = document.querySelectorAll('.button')
console.log(button)
const body = document.querySelector("body")
button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id==='white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id==='red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor = e.target.id
        }
    })
});
```
  #PROJECT2- BMI CALCULATOR
  ```
  const form = document.querySelector('form')
//this use case is wrong and it gives empty value
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if(height == ' '|| height<0||isNaN(height)){
        result.innerHTML =`please give a valid height ${height}`
    }else if(weight == ' '|| weight<0||isNaN(weight)){
        result.innerHTML =`please give a valid weight ${weight}`
    }else{
        const bmi = (weight/(height*height)/10000).toFixed(2)
        //show the result
        result.innerHTML=`<span>${bmi}</span>`
    }
    result.innerHTML=`${height}`
})
```

```
#Project 3 - Display the clock
const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
