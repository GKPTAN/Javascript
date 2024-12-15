const res = document.getElementById('res');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nome = document.getElementById('aluno');

function nextSpace(event, nextInputId) {
    if(event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    };
}

function media(n1, n2) {
    return parseFloat((n1+n2)/2);
};

function verMedia() {
    const n1 = Number.parseFloat(nota1.value);
    const n2 = Number.parseFloat(nota2.value);

    if(nome.value === '' || nota1.value === '' || nota2.value === '') {
        nome.reportValidity();
        nota1.reportValidity();
        nota2.reportValidity();
        return;
    };

    if (n1 > 10 || n2 > 10) {
        nota1.setCustomValidity("Nota tem que ser menor ou igual a 10!");
        nota2.setCustomValidity("Nota tem que ser menor ou igual a 10!");
        return
    };

    res.style.opacity = '1';
    res.innerHTML = `${media(n1, n2)}`;
};

function limpar() {
    nome.value = '';
    nota1.value = '';
    nota2.value = '';
    res.style.opacity = '0';
    res.innerHTML = '';
}