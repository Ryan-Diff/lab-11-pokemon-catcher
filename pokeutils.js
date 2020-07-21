export function getRandomPoke(pokedex) {
    const randomIndex = Math.floor(Math.random() * pokedex.length);
    return pokedex[randomIndex];    
}