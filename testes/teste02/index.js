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
function verificarFuncoes() {
    // Obtém as funções armazenadas do localStorage
    const funcoesArmazenadas = JSON.parse(localStorage.getItem('funcoes'))

    // Verifica se as funções estão armazenadas e se ainda estão dentro do prazo de validade
    if (funcoesArmazenadas && new Date().getTime() < funcoesArmazenadas.expirationTime) {
        // Avalia as strings das funções para convertê-las de volta em funções
        eval(funcoesArmazenadas.azul)
        eval(funcoesArmazenadas.preto)
    } else {
        // As funções não estão mais válidas ou não existem no localStorage
        console.log('As funções não estão mais disponíveis.')
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

// Chama a função para verificar se as funções armazenadas no localStorage estão válidas
verificarFuncoes()

// Chama a função para salvar as funções no localStorage
salvarFuncoes()
