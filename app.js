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

const firstLabel = labels[0];
const span1 = firstLabel.children[0];
const input1 = firstLabel.children[1];
const img1 = firstLabel.children[2];

const secondLabel = labels[0];
const span2 = secondLabel.children[0];
const input2 = secondLabel.children[1];
const img2 = secondLabel.children[2];

const thirdLabel = labels[0];
const span3 = thirdLabel.children[0];
const input3 = thirdLabel.children[1];
const img3 = thirdLabel.children[2];






