
function avatarAleatorioVermelho() {
    return Math.random().toString(36).substring(7);
  }
  

  const estiloVermelho = 'adventurer';
  

  const avatarVermelho = avatarAleatorioVermelho();
  
  const avatarUrlVermelho = `https://api.dicebear.com/7.x/${estiloVermelho}/svg/seed=${avatarVermelho}`

  document.getElementById('avatarAleatorioVermelho').src = avatarUrlVermelho;



  function avatarAleatorioAzul() {
    return Math.random().toString(36).substring(7);
  }
  

  const estiloAzul = 'adventurer';
  

  const avatarAzul = avatarAleatorioAzul();
  
  const avatarUrlAzul = `https://api.dicebear.com/7.x/${estiloAzul}/svg/seed=${avatarAzul}`

  document.getElementById('avatarAleatorioAzul').src = avatarUrlAzul;
