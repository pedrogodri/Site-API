const nomePokemon = document.querySelector('.pokemon-name');
const numeroPokemon = document.querySelector('.pokemon-number');
const fotoPokemon = document.querySelector('.pokemon-image');

const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const mostrarPokemon = async (pokemon) => {
    
    nomePokemon.innerHTML = 'Carregando'
    numeroPokemon.innerHTML = '';
    
    const data = await fetchPokemon(pokemon);

    if (data) {
        nomePokemon.innerHTML = data.name;
        numeroPokemon.innerHTML = data.id;
        fotoPokemon.src = data['sprites']['versions']['generation-v']
        ['black-white']['animated']['front_default'];
        input.value = null;
        searchPokemon = data.id;
    } else {
        abreModal();
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    mostrarPokemon(input.value.toLowerCase());
});

btnPrev.addEventListener('click', () => {
    if(searchPokemon > 1) {
        searchPokemon -= 1;
        mostrarPokemon(searchPokemon);
    }

});

btnNext.addEventListener('click', () => {
    searchPokemon += 1;
    mostrarPokemon(searchPokemon);
});

mostrarPokemon(searchPokemon);

function abreModal() {
    $("#myModal").modal({
        show: true
    });
    input.value = null;
    nomePokemon.innerHTML = 'Não encontrado';
    fotoPokemon.src = '';
}