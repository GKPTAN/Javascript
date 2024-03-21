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
        while (tentativa <= 5) {
            const numeroEscolhido = Number(numero.value)

            if (tentativa === 5) {
                showHiddenSection()
                hideGameSection()
                numero.value = ''
                mensagens = ``
                res.innerHTML = ''
            }

            if (numeroEscolhido === numeroSorteado) {
                res.innerHTML = 'PARABÉNS, VOCÊ ACERTOU'
                setTimeout(() => {
                tentativa = 5
                numero.value = ''
                mensagens = ``
                res.innerHTML = mensagens
                }, 2000)
                const botao = document.getElementById('botao')
                botao.classList.add('hidden')
                const jogarNovamente = document.getElementById('reset')
                jogarNovamente.classList.remove('hidden')
            } else {
                mensagens += `VOCÊ ERROU, tentativa ${tentativa} de 4, seu número ${numeroSorteado} <br>`
                res.innerHTML = mensagens
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

let isIndex = true

function toggleFunction() {
    if (isIndex) {
        loadScript('reserva.js')
    } else {
        loadScript('index.js')
    }
    isIndex = !isIndex
    const jogarNovamente = document.getElementById('reset')
    jogarNovamente.classList.add('hidden')
    const botao = document.getElementById('botao')
    botao.classList.remove('hidden')
}

function loadScript(scriptName) {
    const oldScript = document.querySelector('script[src^="index.js"]')
    oldScript.remove()

    const newScript = document.createElement('script')
    newScript.src = scriptName

    document.head.appendChild(newScript)
}