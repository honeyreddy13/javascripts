const randomnumber = parseInt(Math.random()*100+1)
const submit  = document.querySelector('#subt')
const userinput  = document.querySelector('#guessfield')
const gueseslot  = document.querySelector('.guesses')
const remianing  = document.querySelector('.lastresult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevguess = []
let numGuess = 1
let playgame = true
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess =  parseInt(userinput.value)
       console.log(guess)
       validateguess(guess)
    })
}
function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter  a valid number')
    }else if(guess<1){
        alert('please enter a  number greater than 1')
    }else if(guess>100){
        alert('please enter a number less than 100')
    }else{
        prevguess.push(guess)
        if(numGuess==11){
            displayguess(guess)
            displaymessage(`game over.random number was ${randomnumebr}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    
}
function displayguess(guess){

}
function displaymessage(message){

}
function newgame(){

}
function endgame(){

}