function verificar() {
    let numero = Number(document.getElementById('numero').value);
    let res = document.getElementById('res');

    function sorteio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let numeroSorteado = sorteio(1, 5);

    if (isNaN(numero) || numero < 1 || numero > 5) {
        res.innerHTML = '';
    } else {
        if (numero === numeroSorteado) {
            res.innerHTML = 'PARABENS, VOCÊ ACERTOU!';
        } else {
            res.innerHTML = `PARABENS, VOCÊ ERROU!, o número sorteado foi ${numeroSorteado}`;
        };
    };
};

function nextSpace(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    };
};

function requirido() {
    let numero = document.getElementById('numero');
    let n = Number(numero.value);
    if (!numero.value.trim() || isNaN(n) || n < 1 || n > 5) {
        numero.setCustomValidity('Por favor, escolha um número de 1 a 5');
    } else {
        numero.setCustomValidity('');
    }
    numero.reportValidity();
};

function limpar() {
    document.getElementById('numero').value = '';
    res.innerHTML = '';
};