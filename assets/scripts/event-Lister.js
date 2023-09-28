const cardArea = document.querySelectorAll('.card-area');
const hand = document.getElementById('player-hand');


//Adiconando EventListener
cardArea.forEach(area =>{
    area.addEventListener('dragenter', dragEnter)
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

hand.addEventListener('dragenter', dragEnter);
hand.addEventListener('dragover', dragOver);
hand.addEventListener('dragleave', dragLeave);
hand.addEventListener('drop', drop);


//DRAG E DROP
function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
    let x = e.target.querySelector('.spd');
    x.classList.remove('hide');
    x = e.target.querySelector('.atk');
    x.classList.remove('hide');
    x = e.target.querySelector('.def');
    x.classList.remove('hide');
    
}

function dragEnter(e) {
    if(e.target.classList.contains('card-area') || e.target.classList.contains('player-hand')){
        e.preventDefault(); // possibilita o alvo ser valido para o drop 
        if(e.target.classList.contains('card-area')){
            e.target.classList.add('drag-over');
        }
    }
}

function dragOver(e) {
    if(e.target.classList.contains('card-area') || e.target.classList.contains('player-hand')){
        e.preventDefault(); // possibilita o alvo ser valido para o drop 
        if(e.target.classList.contains('card-area')){
            e.target.classList.add('drag-over');
        }
    }
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    if(e.target.childElementCount < 1 || e.target.classList.contains('player-hand')){
        e.target.classList.remove('drag-over');
    
    const id = e.dataTransfer.getData('text');
    const draggable = document.getElementById(id);
    if(e.target.classList.contains('area-atk')){
        let x = draggable.querySelector('.spd');
        x.classList.add('hide');
        x = draggable.querySelector('.def');
        x.classList.add('hide');
    }
    if(e.target.classList.contains('area-spd')){
        let x = draggable.querySelector('.atk');
        x.classList.add('hide');
        x = draggable.querySelector('.def');
        x.classList.add('hide');
    }
    if(e.target.classList.contains('area-def')){
        let x = draggable.querySelector('.spd');
        x.classList.add('hide');
        x = draggable.querySelector('.atk');
        x.classList.add('hide');
    }
    e.target.appendChild(draggable);
    }
    
}