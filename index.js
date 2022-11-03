// Generate random number between 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1

// get a string of "image/dice/random.png" dice1.png - dice6.png
var img1 = "images/dice" + randomNumber1 + ".png";
var img2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins!"
}
else {
    h1.innerHTML = "Draw!"
};