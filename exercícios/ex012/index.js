// Função para verificar
function verificar() {
    // Variáveis
    const numero = document.getElementById('numero')
    const res = document.getElementById('res')
    const numeroSorteado = sorteio(1, 10)
    const numeroEscolhido = Number(numero.value)

    function sorteio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    for (let tentativa = 0; tentativa <= 4;tentativa++) {
        const valorTentativa = obterValor(tentativa)
        if (numeroEscolhido === numeroSorteado) {
            res.innerHTML = 'PARABÉNS, VOCÊ ACERTOU'
        } else {
            res.innerHTML += `VOCÊ ERROU, tentativa ${tentativa} de 4 <br>`
            numero.value = ''
            numero.focus()
            erro = true
            break
        }
    }

    let erro = false

    if (erro)

    if (tentativa === 4) {
        showHiddenSection()
        hideGameSection()
    }
}

function obterValor(tentativa) {
    return tentativa + 1
}

// Função para exibir a seção oculta
function showHiddenSection() {
    const oculto = document.getElementById('oculto')
    oculto.classList.remove('hidden')
    const corpo = document.getElementById('corpo')
    corpo.style.backgroundColor = 'black'
}

// Função para ocultar a seção do jogo
function hideGameSection() {
    const gameSection = document.getElementById('game')
    gameSection.classList.add('hidden')
}