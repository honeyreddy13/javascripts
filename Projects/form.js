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
        let category;

    // Determine the BMI category
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else {
        category = 'Overweight';
    }
        result.innerHTML=`<span>${bmi}</span>${category}`
    }
})