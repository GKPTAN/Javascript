let numeros = [];
const adicionar = document.getElementById('adicionar');

//3° passo - mostrar ao usuário se ele quer continuar adicionando números//

async function iniciar() {
let c = 0;
let pare = false;

do {
    await new Promise(resolve => {
        const onSimClick = () => {
            resolve();
            adicionar.removeEventListener('click', onSimClick);
        }

        adicionar.addEventListener('click', onSimClick);
    });
} while (c <= Infinity && !pare);
};

async function adicionarNumero () {
    //1° passo - criar uma chamada de evento de click
    //2° passo - verificar se o input do tipo "number" possui algum caractere//
    const pergunta = document.getElementById('pergunta');
    const sim = document.getElementById('sim');
    const nao = document.getElementById('nao');
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