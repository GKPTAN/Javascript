function calcular() {
let cgd = document.getElementById('qtcigarros');
let anosdef = document.getElementById('anosdef');
let res = document.getElementById('res');
if (cgd.value.length === 0 || anosdef.value.length === 0) {
window.alert('[ERRO] Preencha os dados e tente novamente');
} else {
    let cigarros = Number(cgd.value);
    let anos = Number(anosdef.value);
    let restanteVida = 10 * cigarros;
    let tempoFumante = anos * 365;
    let tempoRm = restanteVida * tempoFumante;
    let tempoHoras = tempoRm / 60;
    let tempoDias = tempoHoras / 24;
    res.innerHTML = `Você vai perder no total ${tempoDias} dias de vida`;
};
};

function limpar() {
    document.getElementById('qtcigarros').value = '';
    document.getElementById('anosdef').value = '';
    res.innerHTML = '';
};