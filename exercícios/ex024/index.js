let numeros = document.querySelectorAll('.vetor');
let vetor = new Array(20);

function mostrarBotao() {
    const botao = document.getElementById('botao');
    botao.style.opacity = '1';
};

function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function vetores() {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = sorteio(0, 99);
    };
    
    for (let i = 0; i < vetor.length; i++) {
        numeros[i].innerHTML = `${vetor[i]}`;
    };
};

function ordemCrescente() {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[i] > vetor[j]) {
                let temp = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = temp;
            };
        };
    };

    for (let i = 0; i < vetor.length; i++) {
        numeros[i].innerHTML = `${vetor[i]}`;
    };
};