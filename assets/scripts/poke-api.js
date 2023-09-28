const pokeApi = {};
const min = 1;
const max = 151; 

function getCardData(dataJson) {
    const cardData = new CardModel();
    cardData.name  = dataJson.name;
    cardData.img   = dataJson.sprites.other['official-artwork'].front_default;
    cardData.con   = dataJson.stats[0].base_stat;
    cardData.str   = dataJson.stats[1].base_stat;
    cardData.spd   = dataJson.stats[5].base_stat;

    return cardData;
}


pokeApi.getPokemons = (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
            .then((response) => response.json())
            .then((dataPokemon)=> getCardData(dataPokemon))
            .catch((error)   => console.log(error));
}

pokeApi.randonNumber = ()=>{
    const url = `https://csrng.net/csrng/csrng.php?min=${min}&max=${max}`;

    return fetch(url)
        .then((response) => {console.log(response);})
}