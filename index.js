let randomNumber1 =  Math.floor(Math.random() *6) + 1 ; // This makes a random number between 1 and 6
let randomNumber2 =  Math.floor(Math.random() *6) + 1 ; // This makes a random number between 1 and 6

console.log(randomNumber1);
console.log(randomNumber2);
// Now that I have the random number, I'll change the source to the correspondign number

let img_1 = document.querySelectorAll("img")[0];
let img_2 = document.querySelectorAll("img")[1];

img_1.src = "images/dice" + randomNumber1 + ".png";
img_2.src = "images/dice" + randomNumber2 + ".png";


if (randomNumber1 < randomNumber2) {
    let h1 = document.querySelectorAll("h1")[0];
    h1.innerHTML = "Player 2 Wins!"
    
} else if(randomNumber1 > randomNumber2) {
    let h1 = document.querySelectorAll("h1")[0];
    h1.innerHTML = "Player 1 Wins!"
    
} else {
    let h1 = document.querySelectorAll("h1")[0];
    h1.innerHTML = "It's a tie!"
}

