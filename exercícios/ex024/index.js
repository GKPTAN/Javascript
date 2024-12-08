let numeros = document.querySelectorAll('.vetor');
let numeroAleatorio;
let vetor = new Array(20);

function mostrarBotao() {
    const botao = document.getElementById('botao');
    botao.style.opacity = '1';
};

function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function vetores() {
    let contador;
    for (let i = 0; i < vetor.length; i++) {
        numeroAleatorio = sorteio(0, 99);
        contador = numeroAleatorio;
        vetor[i] = contador;
    };
    
    for (let i = 0; i < vetor.length; i++) {
        numeros[i].innerHTML = `${vetor[i]}`;
    };
};

function ordemCrescente() {
    for (let i = 0; i < vetor.length; i++) {
        numeros[i].innerHTML = `${vetor[i]}`;
    };
};