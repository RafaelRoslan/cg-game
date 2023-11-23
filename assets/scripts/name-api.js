const oponentName = document.querySelector('#oponent-name');


gerarNomeOponent = async()=>{
    let randomId = Math.floor(Math.random() * 10) + 1;
    const url = `https://jsonplaceholder.typicode.com/users/${randomId}`;


     const response = await fetch(url);
     const data = await response.json();  

     return data.username;
}


imprimirNome = async()=>{
    const a = await gerarNomeOponent();
    oponentName.innerHTML = a;
    
}