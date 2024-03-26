// Função para definir as cores azul e preto
function azul() {
    const corDeFundo = document.getElementById('fundo')
    corDeFundo.style.backgroundColor = 'darkblue'
}

function preto() {
    const secao = document.getElementById('quadrado')
    secao.style.backgroundColor = 'black'
}

// Função para armazenar as funções no localStorage por 30 minutos
function salvarFuncoes() {
    // Obtém a data e hora atuais
    const now = new Date().getTime()
    // Define a data e hora de expiração para 30 minutos a partir de agora
    const expirationTime = now + (30 * 60 * 1000)

    
}