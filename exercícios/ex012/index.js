// Função para verificar
function verificar() {
    // Variáveis
    const numero = document.getElementById('numero')
    const res = document.getElementById('res')
    const maxTentativas = 4
    const numeroSorteado = sorteio(1, 16)
    const numeroEscolhido = Number(numero.value)

    let acertou = false

    for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
        if (numeroEscolhido === numeroSorteado) {
            res.innerHTML = 'PARABENS, VOCÊ ACERTOU!';
            acertou = true
            break;
        } else {
            res.innerHTML = `VOCÊ ERROU! Tente novamente. Tentativa ${tentativa} de ${maxTentativas}`
            // Adiciona um pequeno atraso antes de limpar a mensagem
            setTimeout(() => {
                res.innerHTML = '';
            }, 1000)
            numero.value = ''
            break;
        }
    }

    if (!acertou && maxTentativas === 0) {
        showHiddenSection()
        hideGameSection()
    }
}

// Função para exibir a seção oculta
function showHiddenSection() {
    const oculto = document.getElementById('oculto')
    oculto.classList.remove('hidden')
}

// Função para ocultar a seção do jogo
function hideGameSection() {
    const gameSection = document.getElementById('game')
    gameSection.classList.add('hidden')
}

// Função para sorteio
function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}