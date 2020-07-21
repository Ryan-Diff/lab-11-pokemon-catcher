// import functions and grab DOM elements
import { getRandomPoke } from './pokeutils.js';
import Pokedex from './Pokedex.js';
// initialize state
const nextButton = document.getElementById('userChoice');
const pokemonDiv = document.querySelector('#pokemon');
// set event listeners to update state and DOM

let pokemonEncounter = 0;
let capture = [];
let rounds = 0;
let notCaptured = Pokedex.slice();

const randomPoke1 = getRandomPoke();
let randomPoke2 = getRandomPoke();
let randomPoke3  = getRandomPoke();

while (randomPoke1.id === randomPoke2.id) {
    randomPoke2 = getRandomPoke(notCaptured);
}

const labels = document.querySelectorAll('label');




