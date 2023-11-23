const game={
    playerScore:0,
    oponentScore:0,

};


game.startGame = ()=>{
    gerarNumero(1,151);
    imprimirNome();
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









