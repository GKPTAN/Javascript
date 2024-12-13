function somador(n1, n2) {
    return n1 + n2;
};

function nextSpace(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    };
};

function calcularSoma() {
    const res = document.getElementById('res');
    const numero1 = document.getElementById('num1');
    const numero2 = document.getElementById('num2');
    const num1 = Number(numero1.value);
    const num2 = Number(numero2.value);

    if(numero1.value === '' || numero2.value === '') {
        numero1.reportValidity();
        numero2.reportValidity();
        return;
    };

    res.style.opacity = '1';
    res.innerHTML = `${somador(num1, num2)}`;
};

function limpar() {
    const res = document.getElementById('res');
    res.innerHTML = '';
    res.style.opacity = '0';
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}