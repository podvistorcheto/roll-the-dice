'use strict'

// Selecting elements for the game from the html
const score1Element = document.querySelector("#score--0");
const score2Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");

score1Element.textContent = 0;
score2Element.textContent = 0;
// diceElement.classList.add("hidden");