const botaoAzul = document.getElementById('azul')
const botaoVerde = document.getElementById('verde')
const botaoPreto = document.getElementById('preto')
const corDeFundo = document.getElementById('fundo')

// Verifica se há um valor de cor de fundo armazenado no localStorage
const corSalva = localStorage.getItem('corDeFundo')
if (corSalva) {
    const { cor, expiracao } = JSON.parse(corSalva);
    // Verifica se o tempo de expiração ainda não foi alcançado
    if (new Date().getTime() < expiracao) {
        corDeFundo.style.backgroundColor = cor;
    }
}

botaoAzul.addEventListener('click', () => setColor('darkblue'))
botaoVerde.addEventListener('click', () => setColor('darkgreen'))
botaoPreto.addEventListener('click', () => setColor('black'))

function setColor(color) {
    corDeFundo.style.backgroundColor = color
    // Define o tempo de expiração como 30 minutos a partir do tempo atual
    const expirationTime = new Date().getTime() + (30 * 60 * 1000)
    // Salva a cor de fundo e o tempo de expiração no localStorage
    localStorage.setItem('corDeFundo', JSON.stringify({ cor: color, expiracao: expirationTime }))
}
