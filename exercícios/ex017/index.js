const sim = document.getElementById('sim')
const nao = document.getElementById('nao')
let dados = []

async function continuar() {
    const nome = document.getElementById('nome').value
    const idadePessoa = document.getElementById('idade')
    const idade = Number(idadePessoa.value)
    if (nome.length === 0) {
        document.getElementById('nome').setCustomValidity('Campo Obrigatório!')
        document.getElementById('nome').reportValidity()
        return
    } else {
        document.getElementById('nome').setCustomValidity('')
    }

    if (idadePessoa.value.trim() === '' || idadePessoa.value < 1) {
        document.getElementById('idade').setCustomValidity('Campo Obrigatório!')
        document.getElementById('idade').reportValidity()
        return
    } else {
        document.getElementById('idade').setCustomValidity('')
    }

    const dadosPessoais = {
        nome: nome,
        idade: idade
    }

    let c = 0
    let pare = false

    nao.addEventListener('click', () => {
        pare = true
    }, {once: true})

    do {
        if (pare) {
            break
        }
        dados.push(dadosPessoais)
        document.getElementById('nome').value = ''
        document.getElementById('idade').value = ''
        c++
        await new Promise(resolve => {
            sim.addEventListener('click', resolve, {once: true})
        })
    } while (c <= Infinity)
}

async function parar() {
    const verEstatisticas = document.getElementById('estatisticas')
    verEstatisticas.classList.remove('hidden')
    sim.classList.add('hidden')
    nao.classList.add('hidden')
}

function verEstatisticas() {
    const res = document.getElementById('res')
    res.innerHTML = `Quantidade de idades digitadas: ${dados.length}`
}