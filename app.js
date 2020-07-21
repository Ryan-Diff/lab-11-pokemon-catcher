// import functions and grab DOM elements
import { getRandomPoke } from './pokeutils.js';
import Pokedex from './Pokedex.js';
const totalRounds = document.getElementById('total-rounds');
const totalPokeSeen = document.getElementById('total-pokemon-seen');
const pokeImgTags = document.querySelectorAll('img');
const pokeRadioTags = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');
// initialize state

const pokemon = Pokedex.slice();
let gameRounds = 0;
let totalPokemonSeenCounter = 3;
// set event listeners to update state and DOM

function newDeck() {
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
}

newDeck();

pokeRadioTags.forEach((radioTag) => {
    radioTag.addEventListener('click', (e) => {

        return e;
    });
});

nextButton.addEventListener('click', () => {
    gameRounds = gameRounds + 1;
    totalRounds.textContent = `Round: ${gameRounds + 1}`;
    totalPokemonSeenCounter = totalPokemonSeenCounter + 3;
    totalPokeSeen.textContent = `Total Pokemon Seen: ${totalPokeSeen}`;

    newDeck();
});






