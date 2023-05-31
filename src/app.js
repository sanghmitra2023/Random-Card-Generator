/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {};

const totalCards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const randomNumber = totalCards[Math.floor(Math.random() * totalCards.length)];
const randomNumberElement = document.getElementById("randomNumber");
randomNumberElement.innerHTML = randomNumber;

const suits = [
  { suit: "♦", color: "red" },
  { suit: "♥", color: "red" },
  { suit: "♠", color: "black" },
  { suit: "♣", color: "black" }
];
const randomSuit = suits[Math.floor(Math.random() * suits.length)];
const randomSuitElement = document.querySelectorAll(".randomSuit");

randomSuitElement.forEach(element => {
  element.innerHTML = randomSuit.suit;
  element.style.color = randomSuit.color;
  randomNumberElement.style.color = randomSuit.color;
});

/*document.getElementById("button").addEventListener("click", function() {
  window.location.reload();
});
*/
function reloadThePage() {
  window.location.reload();
}
setInterval(reloadThePage, 10000);
