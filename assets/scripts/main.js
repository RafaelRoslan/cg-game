
const hand = document.getElementById('player-hand');
const deck = []
const idPokemon = 7;

for (let i = 0; i < 15; i++) {
    deck.push(Math.floor(Math.random()*150)+1);
}

console.log(deck);

function createCard(dataCard) {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-content">    
            <div>${dataCard.name}</div>
            <div class="card-img">
                <img src="${dataCard.img}" alt="${dataCard.name}">
            </div>
            <div class="card-status">
                <div class="status atk">${dataCard.str}</div>
                <div class="status spd">${dataCard.spd}</div>
                <div class="status def">${dataCard.con}</div>
            </div>
        </div>    
    `;
   return card;
}

pokeApi.getPokemons(deck[0]).then((pokemonData) =>{
    checkHand(pokemonData);    
    //pokeApi.randonNumber();
})

function checkHand(pokemon){
    if(hand.childElementCount <=5){
        for (let i = hand.childElementCount; i < 5; i++) {
            hand.appendChild(createCard(pokemon));                      
        }
    }
}

//gerador de numero
//https://csrng.net/csrng/csrng.php?min=0&max=150

//gerador de nome
//https://jsonplaceholder.typicode.com/users