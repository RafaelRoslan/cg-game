const deck = [];

for (let i = 0; i < 15; i++) {
    deck.push(Math.floor(Math.random()*150)+1);
}

checkHand();



function checkHand() {
    if(hand.childElementCount <=5){
        for (let i = hand.childElementCount; i < 5; i++) {
            pokeApi.getPokemons(deck[0]).then((pokemonData) =>{
                hand.appendChild(createCard(pokemonData));
                    
            })
            deck.shift();                   
        }
    }
}



//gerador de numero
//https://csrng.net/csrng/csrng.php?min=0&max=150

//gerador de nome
//https://jsonplaceholder.typicode.com/users

