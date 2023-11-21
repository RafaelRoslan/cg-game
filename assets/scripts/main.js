const game={
    playerScore:0,
    oponentScore:0,
};


game.startGame = ()=>{
    deckProp.inicialiseDecks();
    deckProp.drawCard();
    oponentTurn.inicializeBtn();

}

game.updateScore = ()=>{
    console.log(game.playerScore);
    console.log(game.oponentScore);
    const playerScoreTxt = document.getElementById('player-point');
    const oponentScoreTxt = document.getElementById('oponent-point');

    playerScoreTxt.innerHTML = game.playerScore.toString();
    oponentScoreTxt.innerHTML = game.oponentScore.toString();

    if(game.playerScore > 2){
        alert("Voce ganhou!");
        window.location.reload();
    }else if(game.oponentScore > 2){
        alert("Voce Perdeu!");
        window.location.reload();
    }
}

game.startGame();






//gerador de numero
function getRandNum(min,max) {
    const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    return fetch(url)
            .then((response)=>response.json())
            .then((randData) => randData)
            .catch((error)=>console.log(error));
}

//gerador de nome
//https://jsonplaceholder.typicode.com/users

