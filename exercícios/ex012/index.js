// Função para verificar
async function verificar() {
    // Variáveis
    const res = document.getElementById('res')
    const numeroSorteado = sorteio(1, 10)

    function sorteio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let tentativa = 1

    async function loop() {

        let mensagens = ''
        while (tentativa <= 4) {
            const numero = document.getElementById('numero')
            const numeroEscolhido = Number(numero.value)
            if (tentativa === 4) {
                showHiddenSection()
                hideGameSection()
            }

            if (numeroEscolhido === numeroSorteado) {
                res.innerHTML = 'PARABÉNS, VOCÊ ACERTOU'
            } else {
                mensagens += `VOCÊ ERROU, tentativa ${tentativa} de 4, seu número ${numeroEscolhido} <br>`
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