function verificar() {
var vel = Number(document.getElementById('velocidade').value);
var res = document.getElementById('res');

if (vel > 80) {
    velAcima = vel - 80;
    multa = velAcima * 5;
    res.innerHTML = `Você ultrapassou o limite de velocidade que é de 80km/h, Você foi MULTADO!, Sua multa é de ${multa} reais`;
};
};

function limpar() {
    document.getElementById('velocidade').value = '';
    res.innerHTML = '';
};