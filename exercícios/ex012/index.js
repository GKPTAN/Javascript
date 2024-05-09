// Obtém as funções armazenadas do localStorage
const funcoesSalvas = localStorage.getItem('funcoes')

if (funcoesSalvas) {
    const {hidden: showHiddenSectionString, game: hideGameSectionString, expirationTime} = JSON.parse(funcoesSalvas)

    if (new Date().getTime() < expirationTime) {
    const funcaoMostrar = new Function('return ' + showHiddenSectionString)()
    const funcaoEsconder = new Function('return ' + hideGameSectionString)()

    funcaoMostrar()
    funcaoEsconder()
    }
}

// Função para verificar
async function verificar() {
    // Variáveis
    const numero = document.getElementById('numero')
    const res = document.getElementById('res')
    const numeroSorteado = sorteio(1, 10)
    var tentativa = 1

    res.style.padding = '30px 0px'

    function sorteio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    async function loop() {

        let mensagens = ''
        while (tentativa <= 5) {
            const numeroEscolhido = Number(numero.value)

            if (numeroEscolhido === numeroSorteado) {
                res.innerHTML = 'PARABÉNS, VOCÊ ACERTOU'
                setTimeout(function() {
                location.reload();
                }, 1500)
            } else {
                mensagens += `VOCÊ ERROU, tentativa ${tentativa} de 4, seu número ${numeroEscolhido} <br>`
                res.innerHTML = mensagens
            }

            if (tentativa === 5) {
                showHiddenSection()
                hideGameSection()
                numero.value = ''
                mensagens = ``
                res.innerHTML = ''
                salvarFuncoes()
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

// Função para armazenar as funções no localStorage por 30 minutos
function salvarFuncoes() {
    // Obtém a data e hora atuais
    const now = new Date().getTime()

    // Define a data e hora de expiração para 30 minutos a partir de agora
    const expirationTime = now + (30 * 60 * 1000)

    // Cria um objeto contendo as funções e a data de expiração
    const funcoesArmazenadas = {
        hidden: showHiddenSection.toString(),
        game: hideGameSection.toString(),
        expirationTime: expirationTime
    }

    // Armazena o objeto no localStorage como uma string JSON
    localStorage.setItem('funcoes', JSON.stringify(funcoesArmazenadas))
}