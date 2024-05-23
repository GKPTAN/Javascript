function calcular() {
    var agora = new Date();
    var anoAtual = agora.getFullYear();
    var nasc = document.getElementById('nasc');
    var res = document.getElementById('res');
    if (nasc.value.length === 0) {
        window.alert('[ERRO], preencha os dados e tente novamente');
    } else {
        let nascimento = Number(nasc.value);
        let idade = anoAtual - nascimento;
        if (idade < 16) {
            res.innerHTML = 'Não pode votar';
        } else {
            if (idade >= 16 && idade < 18 || idade > 60) {
                res.innerHTML = 'Voto Opcional';
            } else {
                res.innerHTML = 'Voto Obrigatório';
            };
        };
    };
};