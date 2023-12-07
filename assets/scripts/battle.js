const battleCards={
    gameArea: document.getElementById('body'),
    player:{
        score: document.querySelector('#player-zone'),
        areaAtk:document.querySelector('.area-atk'),
        areaSpd:document.querySelector('.area-spd'),
        areaDef:document.querySelector('.area-def'),
    },
    oponent:{
        score: document.querySelector('#oponent-zone'),
        areaAtk:document.querySelector('.area-atk-op'),
        areaSpd:document.querySelector('.area-spd-op'),
        areaDef:document.querySelector('.area-def-op'),
    }
};

const btnTurn = document.getElementById('btnEndTurn');

async function startBattle() {
    
    const panel = document.createElement('div');
    panel.classList.add('battle');
    panel.classList.add('start');
    panel.style.display = 'flex';
    
    battleCards.gameArea.appendChild(panel);
    setTimeout(()=>{
        const txtBattle = document.createElement('span');
        txtBattle.classList.add('txtBattle');
        txtBattle.textContent = 'BATALHA';
        panel.appendChild(txtBattle)
    },200);
    setTimeout(()=>{
        panel.classList.remove('start');
        panel.innerHTML = "";
    },1000)
    
    await setTimeout(async()=>{

        checkStats(battleCards.player.areaAtk, battleCards.oponent.areaAtk,'.atk');
        checkStats(battleCards.player.areaSpd, battleCards.oponent.areaSpd,'.spd');
        checkStats(battleCards.player.areaDef, battleCards.oponent.areaDef,'.def');

        let playerScore = battleCards.player.score.querySelectorAll('.card');
        let oponentScore= battleCards.oponent.score.querySelectorAll('.card');


        if (playerScore.length > oponentScore.length) {
            game.playerScore++;
        }else if(playerScore.length < oponentScore.length){
            game.oponentScore++;
        }
        
        await game.updateScore();
        await deckProp.drawCard();
        

    },1500)
    
    await setTimeout(async()=>{await resetBattle(panel);},3500)
    
    
    

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

async function resetBattle(panel){
    battleCards.player.areaAtk.innerHTML = "";
    battleCards.player.areaSpd.innerHTML = "";
    battleCards.player.areaDef.innerHTML = "";
    battleCards.oponent.areaAtk.innerHTML = "";
    battleCards.oponent.areaSpd.innerHTML = "";
    battleCards.oponent.areaDef.innerHTML = "";
    
    btnTurn.disabled = false;
    btnTurn.style.backgroundColor = '#9af347';

    panel.remove();
}