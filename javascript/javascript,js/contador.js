document.addEventListener('DOMContentLoaded', () => {
    const contadorElemento = document.getElementById('clickBotao');
    const clikBotao = document.getElementById('clickBotao');

    clikBotao.addEventListener('click', () => {
        let contador  = 0 
        contador++ 
        contadorElemento.textContent = contador
    })
})