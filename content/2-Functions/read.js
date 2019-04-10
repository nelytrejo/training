// Functions

// 1. Side effect functions
//Funciones de efectos secundarios
function speak () {
  console.log('Char!');
}
speak(); // => Char!

// Functions with arguments
function logPokemonInfo (pokedexNumber, pokemonName, pokemonType) {
  console.log(`#${pokedexNumber} - ${pokemonName} (${pokemonType})`);
}
logPokemonInfo(4, 'Charmander', 'Fire') // => #4 - Charmander (Fire)

// 2. Pure functions

// With return values
//Con valores de retorno
function levelUp (currentLevel) {
  return currentLevel + 1;
}
console.log(levelUp(1)); // => 2

function criticalHit (currentHealth) {
  return currentHealth * 0.9;
}
console.log(criticalHit(100)); // => 90.0

// 3. Functions as first class Citizens

// 3.1 Functions as values - Difference: Footnote 1
//Funciones como valores - Diferencia: Nota al pie 1
const hasFainted = function (currentHealth) {
  return currentHealth > 0;
};

// Short notation - Footnote 2
const isWaterType = (pokemon) => {
  return pokemon.type === 'water';
};

// 3.2 Anonymous functions

// Setup
const pokemonTeam = [
  { name: 'Charmander', type: 'fire', hp: 100, lvl: 2, fainted: false },
  { name: 'Wartortle', type: 'water', hp: 1000, lvl: 32, fainted: true },
  { name: 'Bulbasaur', type: 'plant', hp: 80, lvl: 1, fainted: false }
];

// Use of an anonymous function - Footnote 3
//Uso de una función anónima - Nota 3
const fireTypePokemon = pokemonTeam.filter((pokemon) => {
  return pokemon.type === 'fire';
});

// 3.3 Functions as parameters
//Funciones como parámetros.
const waterTypePokemon = pokemonTeam.filter(isWaterType);

// 4. Useful functions

// 4.1 Map
// Get a list of my types of pokemon
//Obtener una lista de mis tipos de pokemon
const pokemonTypes = pokemonTeam.map((pokemon) => {
  return pokemon.type;
});

// Get a list of only the name and hp of the pokemon team 
//Obtén una lista de solo el nombre y los caballos de fuerza del equipo de pokemon
const ashsPokemon = pokemonTeam.map((pokemon) => {
  return {
    name: pokemon.name,
    hp: pokemon.hp
  }
});

// 4.2 Reduce
// Get a combined HP of all my Pokemon
//Consigue un HP combinado de todos mis Pokémon.
const ashsHP = pokemonTeam.reduce((total, pokemon) => {
  total + pokemon.hp;
});

// Has any of ashs pokemons fainted ?
const ashHasFaintedPokemon = pokemonTeam.reduce((fainted, pokemon) => {
  fainted || pokemon.fainted;
}, false);

// 4.3 forEach
// Log all pokemon names to console
pokemonTeam.forEach((pokemon) => {
  console.log(pokemon.name);
});

// Increase level of all pokemon
//Aumentar el nivel de todos los pokemon.
pokemonTeam.forEach((pokemon) => {
  pokemon.lvl += 1;
});

// Footnotes:
// * Hoisting: https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28
// * Functions short notations: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// * Never use ==: https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
