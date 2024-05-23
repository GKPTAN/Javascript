function analisar() {
    let reta1 = Number(document.getElementById('reta1').value);
    let reta2 = Number(document.getElementById('reta2').value);
    let reta3 = Number(document.getElementById('reta3').value);
    let res = document.getElementById('res');

    if (reta1 === 0 || reta2 === 0 || reta3 === 0) {
        window.alert('[ERRO] Escolha um número maior do que 0');
    } else {
        if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2) {
            res.innerHTML = 'É UM TRIÂNGULO';
            res.style.border = '1px solid green';
        } else {
            res.innerHTML = 'NÃO É UM TRIÂNGULO';
            res.style.border = '1px solid red';
        };
    };
};

function requirido() {
    reta1.reportValidity();
    reta2.reportValidity();
    reta3.reportValidity();
};

function handleKeyDown(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById(nextInputId).focus();
    };
};

function limpar() {
    document.getElementById('reta1').value = '';
    document.getElementById('reta2').value = '';
    document.getElementById('reta3').value = '';
    res.innerHTML = '';
    res.style.border = 'none';
};