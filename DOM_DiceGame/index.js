// From Lesson

// document.querySelector("h1").innerText = "Good Bye!";
// document.querySelector("ul").lastElementChild.innerText = "Subham";
// document.querySelector("input").click();

// Code for Dice Project

// Player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let str1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", str1);

// Player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let str2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", str2);

// Display Winner
if (randomNumber1 === randomNumber2) {
  document.querySelector(".container h1").innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerText = "🚩 Player 1 Wins!";
} else {
  document.querySelector(".container h1").innerText = "Player 2 Wins! 🚩";
}
