function verificar() {
    const secretoNum = Math.floor(Math.random() * 5) + 1; // Número aleatório de 1 a 5
    const maxTentativas = 4;
    const numero = document.getElementById('numero');
    const oculto = document.getElementById('oculto');
    const res = document.getElementById('res');
    const gameSection = document.getElementById('game');

    for (let attempt = 1; attempt <= maxTentativas; attempt++) {
        const userGuess = parseInt(numero.value);

        if (userGuess === secretoNum) {
            res.innerHTML = `Você acertou na tentativa ${attempt}!`;
            showResultSection();
            return;
        } else {
            res.innerHTML = `Você errou na tentativa ${attempt}.`;
        }
    }

    // Se o usuário falhou em todas as tentativas
    mostrarOculto();
    esconderSectionGame();
}

function mostrarOculto() {
    const oculto = document.getElementById('oculto')
    oculto.style.display = 'flex'
}

function hideGameSection() {
    const gameSection = document.getElementById('game');
    gameSection.classList.add('hidden');
}