import { pokemonEmpty } from './pokemonArray.js';


export function getRandomPoke(Pokedex) {
    const randomIndex = Math.floor(Math.random() * Pokedex.length);
    return Pokedex[randomIndex];    
}

export function getCurrentPokemonArray() {
    let rawPokeCart = JSON.parse(localStorage.getItem('CART'));

    if (!rawPokeCart) {
        localStorage.setItem('CART', JSON.stringify(pokemonEmpty));

        rawPokeCart = JSON.parse(localStorage.getItem('CART'));
    }

    return rawPokeCart;
}

export function findById(Pokedex, pokemonName) {
    let pokemonMatch;

    for (let i = 0; i < Pokedex.length; i++) {
        if (Pokedex[i].pokemon === pokemonName) {
            pokemonMatch = Pokedex[i];
            return pokemonMatch;
        }
    }
}

export function addPokemonCaptures(localStoragePokemon, pokemonName) {

    let matchedPokemon = findById(localStoragePokemon, pokemonName);

    if (matchedPokemon) {
        matchedPokemon.captured++;
    }

    const stringyLocalStoragePokemon = JSON.stringify(localStoragePokemon);

    localStorage.setItem('CART', stringyLocalStoragePokemon);
}

export function addPokemonEncounters(localStoragePokemon, pokemonName1, pokemonName2, pokemonName3) {

    let matchedPokemon1 = findById(localStoragePokemon, pokemonName1);
    let matchedPokemon2 = findById(localStoragePokemon, pokemonName2);
    let matchedPokemon3 = findById(localStoragePokemon, pokemonName3);

    if (matchedPokemon1) {
        matchedPokemon1.encountered++;
    }

    if (matchedPokemon2) {
        matchedPokemon2.encountered++;
    }

    if (matchedPokemon3) {
        matchedPokemon3.encountered++;
    }

    const stringyLocalStoragePokemon = JSON.stringify(localStoragePokemon);
    localStorage.setItem('CART', stringyLocalStoragePokemon);
}

export function mungeCaptured(localStoragePokemon) {
    let capturedPokemon = [];
    for (let i = 0; i < localStoragePokemon.length; i++) {
        let pokemon = localStoragePokemon[i];
        capturedPokemon.push(pokemon.captured);
    }
    return capturedPokemon;
}

export function mungeEncountered(localStoragePokemon) {
    let encountered = [];
    for (let i = 0; i < localStoragePokemon.length; i++) {
        let pokemon = localStoragePokemon[i];
        encountered.push(pokemon.encountered);
    }
    return encountered;
}