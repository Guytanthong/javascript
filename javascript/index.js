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

//dice roller

function rollDice(){
    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceimgs = document.getElementById("diceimgs");
    const values =[];
    const images = [];
    
    for(let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="../imgs/${value}.png" alt ="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceimgs.innerHTML = images.join('');

}

//password generator

function generatePassword(length,includeLowercase,includeUppercase ,includeNumbers,includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `password lenght must be at least 1`;
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols =true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated Password: ${password}`);


//getter setter

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height =height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;

        }else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;

        }else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(4,4);

rectangle.width = 5;
rectangle.height = 6;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);



