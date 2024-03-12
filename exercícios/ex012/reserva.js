// Função para verificar
async function verificar() {
    const res = document.getElementById('res')
    const numeroSorteado = sorteio(1, 10)
    const numero = document.getElementById('numero')
    let tentativa = 1
    let mensagens = ''

    for (tentativa; tentativa <= 4; tentativa++) {
        const numeroEscolhido = Number(numero.value)

        if (numeroEscolhido === numeroSorteado) {
            res.innerHTML = 'PARABÉNS, VOCÊ ACERTOU'
            break;
        } else {
            mensagens += `VOCÊ ERROU, tentativa ${tentativa} de 4, seu número ${numeroEscolhido} <br>`
            res.innerHTML = mensagens
            await aguardarInput()
            numero.value = ''
        }
    }

    if (tentativa === 4) {
        showHiddenSection()
        hideGameSection()
    }
}

// Função para esperar a entrada do usuário
function aguardarInput() {
    return new Promise(resolve => {
        document.getElementById('botao').addEventListener('click', resolve);
    })
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

function nextSpace(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById(nextInputId).focus()
    }
}

function requirido() {
    let resposta = document.getElementById('res')
    let num = document.getElementById('numero')
    let n = Number(numero.value)
    if (!num.value.trim() || isNaN(n) || n < 1 || n > 10) {
        num.setCustomValidity('Por favor, escolha um número de 1 a 10')
        resposta.innerHTML = ''
    } else {
        num.setCustomValidity('')
    }
    num.reportValidity()
}

function reiniciar() {
    tentativa = 1
    document.getElementById('res').innerHTML = ''
    document.getElementById('numero').value = ''
}