const battleCards={};
//const btnBattleAction = document.getElementById('btnBattle');
const gameArea = document.getElementById('body');

// battleCards.inicializeBattleBtn=()=>{
//     btnBattleAction.addEventListener('click',()=>{
//     startBattle();
// })};

function startBattle() {
    //btnBattleAction.disabled = true;
    const panel = document.createElement('div');
    panel.classList.add('battle')
    panel.style.display = 'flex';
    
    gameArea.appendChild(panel);
    setTimeout(()=>{
        const txtBattle = document.createElement('span');
        txtBattle.classList.add('txtBattle');
        txtBattle.textContent = 'BATTLE';
        panel.appendChild(txtBattle)
    },200);
    setTimeout(()=>{panel.remove();},1000)
    
    setTimeout(async()=>{
        let playerPoint = document.querySelector('#player-zone');
        let oponentPoint = document.querySelector('#oponent-zone');

        let cardPlayer = document.querySelector('.area-atk');
        let cardOponent = document.querySelector('.area-atk-op');
        checkStats(cardPlayer, cardOponent,'.atk');

        cardPlayer = document.querySelector('.area-spd');
        cardOponent = document.querySelector('.area-spd-op');
        checkStats(cardPlayer, cardOponent,'.spd');

        cardPlayer = document.querySelector('.area-def');
        cardOponent = document.querySelector('.area-def-op');
        checkStats(cardPlayer, cardOponent,'.def');

        if (playerPoint.querySelectorAll('.card').length > oponentPoint.querySelectorAll('.card').length) {
            game.playerScore += 1;
        }else if(playerPoint.querySelectorAll('.card').length < oponentPoint.querySelectorAll('.card').length){
            game.oponentScore += 1;
        }
        
        await game.updateScore();
        await deckProp.drawCard();


    },1500)

}


function checkStats(player,oponent, stat) {

    if(parseInt(player.querySelector(stat).innerHTML) > parseInt(oponent.querySelector(stat).innerHTML)){
        oponent.innerHTML ='';
    }else if(parseInt(player.querySelector(stat).innerHTML) < parseInt(oponent.querySelector(stat).innerHTML)){
        player.innerHTML ='';
    }
    else{
        player.innerHTML ='';
        oponent.innerHTML ='';
    }
}