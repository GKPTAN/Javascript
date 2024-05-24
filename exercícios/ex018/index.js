let numeros = [];
const adicionar = document.getElementById('adicionar');
const pergunta = document.getElementById('pergunta');
const sim = document.getElementById('sim');
const nao = document.getElementById('nao');

//3° passo - mostrar ao usuário se ele quer continuar adicionando números//
//4° passo - esperar o usuário clicar em um dos botões
//5° passo - se o usuário apertar em sim, ele poderá adicionar um número novamente
//6° passo - se o usuário apertar em não, a variável pare = true e c = infinity encerrando o ciclo de repetição, e mostra as estatísticas
//7° passo - quando o usuário clicar no botão reiniciar, o site vai reiniciar

async function iniciar() {
let c = 0;
let pare = false;

nao.addEventListener('click', () => {
    c = Infinity;
    pare = true;
}, {once: true});

do {
    await new Promise(resolve => {
        const onAdicionarClick = () => {
            resolve();
            adicionar.removeEventListener('click', onAdicionarClick);
        }

        adicionar.addEventListener('click', onAdicionarClick);
    });

    await new Promise(resolve => {
        const onSimClick = () => {
            resolve();
            sim.removeEventListener('click', onSimClick);
        }

        sim.addEventListener('click', onSimClick);
    });
    c++
} while (c <= Infinity && !pare);
};

async function adicionarNumero () {
    //1° passo - criar uma chamada de evento de click
    //2° passo - verificar se o input do tipo "number" possui algum caractere//
    const valorNumero = document.getElementById('numero');
    const numero = Number.parseFloat(valorNumero.value);

    if (valorNumero.value.trim() === '') {
        valorNumero.reportValidity();
        return;
    };

    numeros.push(numero);
    valorNumero.value = '';
    adicionar.classList.add('hidden');
    pergunta.classList.remove('hidden');
    sim.classList.remove('hidden');
    nao.classList.remove('hidden');
};

function continuar() {
    pergunta.classList.add('hidden');
    sim.classList.add('hidden');
    nao.classList.add('hidden');
    adicionar.classList.remove('hidden');
};

function estatisticas() {
    const reiniciar = document.getElementById('reiniciar');
    const res = document.getElementById('res');

    pergunta.classList.add('hidden');
    sim.classList.add('hidden');
    nao.classList.add('hidden');
    reiniciar.classList.remove('hidden');

    let somatorio = 0;
    let menorValor = Infinity;
    let media;
    let quantidadeNumerosPares = 0;

    for (let numero of numeros) {
        somatorio = numero + somatorio;
        if (numero < menorValor) {
            menorValor = numero;
        };

        if (numero % 2 === 0) {
            quantidadeNumerosPares++;
        };
    };

    media = Number.parseFloat(somatorio / numeros.length);
    res.style.opacity = '1';
    if (quantidadeNumerosPares > 1) {
        res.innerHTML = `Números digitados = ${numeros} <br> A soma de todos os números é ${somatorio} <br> O menor valor digitado foi ${menorValor} <br> A média entre todos os números é de ${media} <br> Quantidade de números pares: ${quantidadeNumerosPares} números <br>`;
    } else {
        res.innerHTML = `Números digitados = ${numeros} <br> A soma de todos os números é ${somatorio} <br> O menor valor digitado foi ${menorValor} <br> A média entre todos os números é de ${media} <br> Quantidade de números pares: ${quantidadeNumerosPares} número`;
    };
};

function reiniciar() {
    location.reload();
};

document.getElementById('reiniciar').onclick = reiniciar;

iniciar();