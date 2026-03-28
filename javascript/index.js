//counter program

const decreaseBtn = document.getElementById("decrement");
const increaseBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const countLabel = document.getElementById("display");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//random number generator
const rollBtn = document.getElementById("myButton");
const label = document.getElementById("myLabel");

const min = 1;
const max = 6;

let randomNum;

rollBtn.onclick = function(){
    randomNum = Math.floor((Math.random() * max)) + min;
    label.textContent = randomNum;
}

//Number guessing game

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess ;
// let running = true;

// while(running){

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }else if(guess < minNum || guess >maxNum){
//         window.alert("Please enter a valid number");

//     }else{
//         attempts++;
//         if(guess < answer){
//             window.alert("Too Low");
//         }else if(guess > answer){
//             window.alert("Too High");
//         }else{
//             window.alert("Correct");
//             running = false;
//         }
//     }

   
// }

// temp conve
const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const res = document.getElementById("res");

let temp;

function convert(){
    if(toF.checked){
            temp = Number(textbox.value);
            temp = temp * 9 / 5 + 32;
            res.textContent= temp + "F"
    }else if(toC.checked){
        temp = Number(textbox.value);
        temp = (temp -32) *(5/9);
        res.textContent= temp + "C"
    }else{
        res.textContent= "select a unit"
    }
}
