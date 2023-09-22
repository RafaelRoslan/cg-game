const card = document.getElementById('card');

const idPokemon = 88;

function createCard(dataCard) {
    
    const div = document.createElement('div');
    div.innerHTML = `
            <div>
                <div>${dataCard.name}</div>
                <div>${dataCard.str}</div>
                <div>${dataCard.spd}</div>
                <div>${dataCard.con}</div>
            </div>
    `;
   card.appendChild(div);
}

pokeApi.getPokemons(idPokemon).then((pokemon) =>{
    createCard(pokemon);
})


//gerador de numero
//https://csrng.net/csrng/csrng.php?min=0&max=150

//gerador de nome
//https://jsonplaceholder.typicode.com/users