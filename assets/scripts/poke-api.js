const pokeApi = {};
const min = 1;
const max = 151; 

class CardModel{
    id;
    name;
    img;
    str;
    spd;
    def;
}

//Atribuinado a classe CardModel
function getCardData(dataJson) {
    const cardData = new CardModel();
    cardData.id    = dataJson.id;
    cardData.name  = dataJson.name;
    cardData.img   = dataJson.sprites.other['official-artwork'].front_default;
    cardData.def   = dataJson.stats[0].base_stat;
    cardData.str   = dataJson.stats[1].base_stat;
    cardData.spd   = dataJson.stats[5].base_stat;

    return cardData;
}

//Criando Carta
function createCard(dataCard) {
    
    const card = document.createElement('div');
    card.setAttribute('id',dataCard.id)
    card.classList.add('card');
    card.draggable = true;
    card.addEventListener('dragstart',dragStart)
    card.innerHTML = `
        <div class="card-content">    
            <div class="card-name">${dataCard.name}</div>
            <div class="card-img">
                <img src="${dataCard.img}" alt="${dataCard.name}">
            </div>
            <div class="card-status">
                <div class="status atk">${dataCard.str}</div>
                <div class="status spd">${dataCard.spd}</div>
                <div class="status def">${dataCard.def}</div>
            </div>
        </div>    
    `;
   return card;
}

//Consumindo API
pokeApi.getPokemons = (id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(url)
            .then((response) => response.json())
            .then((dataPokemon)=> getCardData(dataPokemon))
            .catch((error)   => console.log(error));
}
