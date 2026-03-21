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


