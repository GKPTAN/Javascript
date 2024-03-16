// Função para verificar
async function verificar() {
    // Variáveis
    const numero = document.getElementById('numero')
    const res = document.getElementById('res')
    const numeroSorteado = sorteio(1, 10)
    var tentativa = 1

    function sorteio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    async function loop() {

        let mensagens = ''
        while (tentativa <= 4) {
            const numeroEscolhido = Number(numero.value)

            if (numeroEscolhido === numeroSorteado) {
                res.innerHTML = 'PARABÉNS, VOCÊ ACERTOU'
                setTimeout(() => {
                numero.value = ''
                mensagens = ``
                res.innerHTML = mensagens
                }, 2000)
            } else {
                mensagens += `VOCÊ ERROU, tentativa ${tentativa} de 4, seu número ${numeroSorteado} <br>`
                res.innerHTML = mensagens
            }

            if (tentativa === 4) {
                showHiddenSection()
                hideGameSection()
                numero.value = ''
                mensagens = ``
                res.innerHTML = ''
            }

            tentativa++
            await new Promise(resolve => {
                document.getElementById('botao').addEventListener('click', resolve)
            })
        }
    }
    loop()
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
    const cabeca = document.getElementById('cabeca')
    cabeca.classList.add('hidden')
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

function blockUser() {
    const beforeBlock = localStorage.getItem('bloqueado')
    if (beforeBlock) {
        const timeBlock = JSON.parse(beforeBlock)
        const agora = new Date().getTime()
        const difTime = agora - timeBlock
        const tempoRestante = 30 * 60 * 1000 - difTime
        if (tempoRestante > 0) {
            return
        }
    }

    const agora = new Date().getTime()
    localStorage.setItem('bloqueado', JSON.stringify(agora))
}