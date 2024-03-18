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

function showGameSection() {
    const gameSection = document.getElementById('game')
    gameSection.classList.remove('hidden')
    const cabeca = document.getElementById('cabeca')
    cabeca.classList.remove('hidden')
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

// Função para verificar se as tentativas acabaram
function verificarFimTentativas() {
    // Verifica se as tentativas do jogador acabaram
    const tentativasAcabaram = true // Coloque aqui a sua lógica para verificar se as tentativas acabaram

    if (tentativasAcabaram) {
        // Armazena a data e hora atual no localStorage
        const agora = new Date().getTime()
        localStorage.setItem('tempoFimTentativas', agora)

        // Esconde a seção do jogo
        hideGameSection()
    }
}

// Função para verificar se o tempo de espera acabou
function verificarTempoEspera() {
    // Verifica se o tempo de espera já passou
    const tempoFimTentativas = localStorage.getItem('tempoFimTentativas')
    if (tempoFimTentativas) {
        const agora = new Date().getTime()
        const tempoDecorrido = agora - parseInt(tempoFimTentativas)
        const tempoEspera = 30 * 60 * 1000 // 30 minutos em milissegundos

        if (tempoDecorrido < tempoEspera) {
            // O tempo de espera ainda não acabou, então mantenha a seção do jogo oculta
            hideGameSection()

            // Configura um temporizador para verificar novamente após o tempo restante
            const tempoRestante = tempoEspera - tempoDecorrido
            setTimeout(verificarTempoEspera, tempoRestante)
        } else {
            // O tempo de espera acabou, mostra a seção do jogo
            showGameSection()

            // Remove o tempo de fim das tentativas do localStorage
            localStorage.removeItem('tempoFimTentativas')
        }
    }
}

// Chame as funções para verificar o fim das tentativas e o tempo de espera ao carregar a página
verificarFimTentativas()
verificarTempoEspera()