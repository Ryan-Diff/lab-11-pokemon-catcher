/* eslint-disable */
import { mungeCaptured, mungeEncountered } from './pokeutils.js';

const statsPage = document.getElementById('results');
const resetButton = document.getElementById('reset-button');
const pokeChart = document.getElementById('chart-container');

resetButton.addEventListener('click', () => {
    localStorage.removeItem('CART');
    statsPage.textContent = 'Cleared Pokedex';
    pokeChart.classList.add('hidden');
});

let rawPokedex = localStorage.getItem('CART');
let pokeArray = JSON.parse(rawPokedex);

let mungeCapturedArray = mungeCaptured(pokeArray);

let mungeEncounteredArray = mungeEncountered(pokeArray);

let pokemonNames = ['bulbasaur', 'venusaur-mega', 'ivysaur', 'charmander', 'charmeleon', 'charizard', 'charizard-mega-x', 'charizard-mega-y', 'squirtle', 'wartortle', 'blastoise', 'blastoise-mega', 'caterpie', 'metapod', 'beedrill', 'weedle', 'kakuna', 'beedrill-mega', 'pidgey'];

var pokemonEncounteredChart = document.getElementById('pokemonEncounteredChart');
new Chart(pokemonEncounteredChart, {
    type: 'bar', 
    data: {
        labels: pokemonNames,
        datasets: [{
            label: 'Times youve encountered this Pokemon',
            data: mungeEncounteredArray,
            backgroundColor: 'black',
            borderColor: 'red', 
            borderWidth: 1
            
        }, {
            label: 'Times youve captured this Pokemon',
            data: mungeCapturedArray,
            backgroundColor: 'white',
            borderColor: 'red', 
            borderWidth: 1
        }]
    }, 
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }  
});
