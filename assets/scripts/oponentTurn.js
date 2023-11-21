const oponentTurn={};
const btnEndTurn = document.getElementById('btnEndTurn');
const oponentDeck = document.getElementById('oponent-deck');

oponentTurn.inicializeBtn = ()=>{
    btnEndTurn.addEventListener('click',async()=>{
        const areaPlayer = document.querySelectorAll('.card-area');
        let checkedArea = false;
        
        areaPlayer.forEach(area => {
            if(area.childNodes.length < 1){
                checkedArea = false;
            } else{
                checkedArea = true;
            }
        });
        if(checkedArea === true){
            btnEndTurn.disabled = true;
            btnEndTurn.style.backgroundColor = '#78836d';
    
    
            let areaOP = document.querySelectorAll('.card-area-op');
    
             addCardsOponent(areaOP);
        }
    
        setTimeout(()=>{
            //btnEndTurn.classList.add('hide');
            //btnBattle.classList.remove('hide');
            startBattle();
        },1000)
        
    });
}


function addCardsOponent(areaOP) {
    areaOP.forEach((areaOP) =>{
        pokeApi.getPokemons(deckProp.deckOponent[0]).then((pokemonData) =>{
            areaOP.appendChild(createCard(pokemonData));
            
            if (areaOP.classList.contains('area-atk-op')){
                let aux = areaOP.querySelector('.spd');
                aux.classList.add('hide');
                aux = areaOP.querySelector('.def');
                aux.classList.add('hide');
            } else if (areaOP.classList.contains('area-spd-op')){
                let aux = areaOP.querySelector('.atk');
                aux.classList.add('hide');
                aux = areaOP.querySelector('.def');
                aux.classList.add('hide');
            }else if (areaOP.classList.contains('area-def-op')){
                let aux = areaOP.querySelector('.spd');
                aux.classList.add('hide');
                aux = areaOP.querySelector('.atk');
                aux.classList.add('hide');
            }
        })
        deckProp.deckOponent.shift();
        oponentDeck.innerHTML = deckProp.deckOponent.length-2;
    });
}