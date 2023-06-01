/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const totalCards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["♦", "♥", "♠", "♣"];

function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
const randomSuits = getRandomElementFromArray(suits);
const randomNumber = getRandomElementFromArray(totalCards);

const randomNumberElement = document.getElementById("randomNumber");
randomNumberElement.innerHTML = randomNumber;

const randomSuitElement = document.querySelector(".randomSuit");
randomSuitElement.innerHTML = randomSuits;

const randomSuitElementTwo = document.querySelector(".randomSuitTwo");
randomSuitElementTwo.innerHTML = randomSuits;

if (randomSuits === "♦" || randomSuits === "♥") {
  randomSuitElement.style.color = "red";
  randomNumberElement.style.color = "red";
  randomSuitElementTwo.style.color = "red";
}

document.getElementById("button").addEventListener("click", function() {
  window.location.reload();
});

function reloadThePage() {
  window.location.reload();
}
setInterval(reloadThePage, 10000);
