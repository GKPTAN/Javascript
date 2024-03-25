const botaoAzul = document.getElementById('azul')
const botaoVerde = document.getElementById('verde')
const botaoPreto = document.getElementById('preto')
const corDeFundo = document.getElementById('fundo')
const secao = document.getElementById('quadrado')

// Verifica se há um valor de cor de fundo armazenado no localStorage
const corSalva = localStorage.getItem('corDeFundo')
if (corSalva) {
    const { cor, expiracao, fundo } = JSON.parse(corSalva);
    // Verifica se o tempo de expiração ainda não foi alcançado
    if (new Date().getTime() < expiracao) {
        corDeFundo.style.backgroundColor = cor
        secao.style.backgroundColor = fundo
    }
}

botaoAzul.addEventListener('click', () => setColor('darkblue', 'black'))
botaoVerde.addEventListener('click', () => setColor('darkgreen', 'black'))
botaoPreto.addEventListener('click', () => setColor('black', 'black'))

function setColor(color, background) {
    corDeFundo.style.backgroundColor = color
    secao.style.backgroundColor = background
    // Define o tempo de expiração como 30 minutos a partir do tempo atual
    const expirationTime = new Date().getTime() + (30 * 60 * 1000)
    // Salva a cor de fundo e o tempo de expiração no localStorage
    localStorage.setItem('corDeFundo', JSON.stringify({ cor: color, expiracao: expirationTime, fundo: background }))
}
