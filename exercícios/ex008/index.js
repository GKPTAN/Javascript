function calcular() {
    let nome = document.querySelector("#nome").value;
    let nota1 = Number.parseFloat(document.querySelector("#nota1").value);
    let nota2 = Number.parseFloat(document.querySelector("#nota2").value);
    let res = document.getElementById('resultado');
    let media = (nota1 + nota2) / 2;
    
    if (media <= 4.9) {
        res.innerHTML = `A média do aluno ${nome} foi de ${media}, resultado: REPROVADO(A)!`;
    } else {
        if (media > 4.9 && media <= 6.9) {
            res.innerHTML = `A média do aluno ${nome} foi de ${media}, resultado: RECUPERAÇÃO!`;
        } else {
            if (media > 6.9) {
                res.innerHTML = `A média do aluno ${nome} foi de ${media}, resultado: APROVADO(A)!`;
            } else {
                res.innerHTML = '';
            };
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
    nome.reportValidity();
    nota1.reportValidity();
    nota2.reportValidity();
};

function limpar() {
    document.querySelector("#nome").value = '';
    document.querySelector("#nota1").value = '';
    document.querySelector("#nota2").value = '';
    document.getElementById('resultado').innerHTML = '';
};