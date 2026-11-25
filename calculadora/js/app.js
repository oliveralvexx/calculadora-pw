const tela = document.getElementById('tela');
const botao = document.querySelectorAll('button');

botao.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.value;

    if (valor === 'CE') {
      tela.textContent = '';
    } else if (valor === 'DEL') {
      tela.textContent = tela.textContent.slice(0, -1);
    } else if (valor === '=') {
      try {    
        tela.textContent = eval(tela.textContent);
      } catch {
        tela.textContent = 'Erro';
      }
    } else {
      tela.textContent += valor;
    }  
  }); 
});  