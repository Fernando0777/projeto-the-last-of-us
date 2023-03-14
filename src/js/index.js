const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const descricaoCarrossel = document.querySelectorAll('.descricao');

botoesCarrossel.forEach((botao, indice) =>{
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        imagens[indice].classList.add('ativa');
        const textoAtivo = document.querySelector('.txtativo');
        textoAtivo.classList.remove('txtativo');
        descricaoCarrossel[indice].classList.add('txtativo');
    })
})





