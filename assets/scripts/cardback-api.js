const playerDeckImg = document.querySelector('#cardback-player');
const oponentDeckImg = document.querySelector('#cardback-oponent');

console.log(playerDeckImg);

const url = 'https://api.unsplash.com/search/photos/?query=pokemon&client_id=lDwYaefOljnsaX7I0FadNpk0FYlUiQpUxbyBVGK7-Vs';

async function addImage(){
    let randImagePlayer =  await getNewImage();
    let randImageOponent =  await getNewImage();
    playerDeckImg.src = randImagePlayer;
    oponentDeckImg.src = randImageOponent;
}

async function getNewImage(){
    let randNumber = Math.floor(Math.random()*10);
    return fetch(url)
            .then(response => response.json)
            .then(data => {
                let allImages = data.results[randNumber];
                return allImages.urls.regular;
            })
            .catch(erro => console.log("Erro na API " + erro));
}