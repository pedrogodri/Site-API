const nomePokemon = document.querySelector('.pokemon-name');
const numeroPokemon = document.querySelector('.pokemon-number');
const fotoPokemon = document.querySelector('.pokemon-image');

const form = document.querySelector('.form');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const mostrarPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    nomePokemon.innerHTML = data.name;
    numeroPokemon.innerHTML = data.id;
    fotoPokemon.src = data['sprites']['versions']['generation-v']
                          ['black-white']['animated']['front_default'];
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('enviando');
});