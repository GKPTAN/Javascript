// Função para definir as cores azul e preto
function azul() {
    const corDeFundo = document.getElementById('fundo')
    corDeFundo.style.backgroundColor = 'darkblue'
}

function preto() {
    const secao = document.getElementById('quadrado')
    secao.style.backgroundColor = 'black'
}

// Função para verificar se as funções armazenadas no localStorage estão válidas
    // Obtém as funções armazenadas do localStorage
    const funcoesSalvas = localStorage.getItem('funcoes')

    if (funcoesSalvas) {
        const {azul, preto, expirationTime} = JSON.parse(funcoesSalvas)

        if (new Date().getTime() < expirationTime) {
            azul
            preto
        }
    }

// Função para armazenar as funções no localStorage por 30 minutos
function salvarFuncoes() {
    // Obtém a data e hora atuais
    const now = new Date().getTime()
    // Define a data e hora de expiração para 30 minutos a partir de agora
    const expirationTime = now + (30 * 60 * 1000)

    // Cria um objeto contendo as funções e a data de expiração
    const funcoesArmazenadas = {
        azul: azul.toString(),
        preto: preto.toString(),
        expirationTime: expirationTime
    }

    // Armazena o objeto no localStorage como uma string JSON
    localStorage.setItem('funcoes', JSON.stringify(funcoesArmazenadas))
}

// Chama a função para salvar as funções no localStorage
salvarFuncoes()
