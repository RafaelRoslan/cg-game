const deckProp = {};
const playerDeck = document.getElementById('player-deck');
deckProp['deck']=[];
deckProp['deckOponent']=[];

deckProp.inicialiseDecks = ()=>{
    for (let i = 0; i < 15; i++) {
        deckProp.deck.push(Math.floor(Math.random()*150)+1);
        deckProp.deckOponent.push(Math.floor(Math.random()*150)+1);
    }
}


deckProp.drawCard = () => {
    if(hand.childElementCount <=5){
        for (let i = hand.childElementCount; i < 5; i++) {
            pokeApi.getPokemons(deckProp.deck[0]).then((pokemonData) =>{
                hand.appendChild(createCard(pokemonData));
                    
            })
            deckProp.deck.shift();
            playerDeck.innerHTML = deckProp.deck.length                 
        }
    }
}
