// import functions and grab DOM elements
import { getRandomPoke, getCurrentPokemonArray, addPokemonCaptures, addPokemonEncounters } from './pokeutils.js';
import Pokedex from './Pokedex.js';
const totalRounds = document.getElementById('total-rounds');
const totalPokeSeen = document.getElementById('total-pokemon-seen');
const pokeImgTags = document.querySelectorAll('img');
const pokeRadioTags = document.querySelectorAll('input');
// const nextButton = document.getElementById('next-button');
// const totalPokemonCaptured = document.getElementById('total-pokemon-captured');
// initialize state
// let pokemonCaptured = 0;
const pokemon = Pokedex.slice();
let gameRounds = 0;
let totalPokemonSeenCounter = 3;
let pokemonEncountered = [];
let localStoragePokemon = getCurrentPokemonArray;


// set event listeners to update state and DOM

function newDeck() { 
    if (gameRounds === 10) {
        window.location.href = '../results.html';
    }
    const randomPokemon1 = getRandomPoke(pokemon);
    let randomPokemon2 = getRandomPoke(pokemon);
    let randomPokemon3 = getRandomPoke(pokemon);
    pokeImgTags[0].src = randomPokemon1.url_image;
    pokeImgTags[1].src = randomPokemon2.url_image;
    pokeImgTags[2].src = randomPokemon3.url_image;

    while (randomPokemon1 === randomPokemon2 || randomPokemon2 === randomPokemon3 || randomPokemon1 === randomPokemon3) {
        randomPokemon2 = getRandomPoke(pokemon);
        randomPokemon3 = getRandomPoke(pokemon);
        pokeImgTags[0].src = randomPokemon1.url_image;
        pokeImgTags[1].src = randomPokemon2.url_image;
        pokeImgTags[2].src = randomPokemon3.url_image;
    }

    pokeRadioTags.forEach((radioTag, i) => {
        if (i === 0) {
            radioTag.value = randomPokemon1.pokemon;
        } else if (i === 1) {
            radioTag.value = randomPokemon2.pokemon;
        } else if (i === 2) {
            radioTag.value = randomPokemon3.pokemon;
        }
    });

    addPokemonEncounters(localStoragePokemon, randomPokemon1.pokemon, randomPokemon2.pokemon, randomPokemon3.pokemon);
 
}

newDeck();

pokeRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (e) => {
        pokemonEncountered.push(e.target.value);

        gameRounds = gameRounds + 1;
        totalRounds.textContent = `Round: ${gameRounds + 1}`;

        totalPokemonSeenCounter = totalPokemonSeenCounter + 1;
        totalPokeSeen.textContent = `Total Pokemon Seen: ${totalPokemonSeenCounter}`;

        addPokemonCaptures(localStoragePokemon, e.target.value);

        newDeck();
    });
});







