const sim = document.getElementById('sim')
const nao = document.getElementById('nao')
let dados = []

async function continuar() {
    let c = 0
    let pare = false

    nao.addEventListener('click', () => {
        pare = true
        c = Infinity
    }, { once: true })

    do {
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

        dados.push({nome: nome, idade: idade})
        document.getElementById('nome').value = ''
        document.getElementById('idade').value = ''

        await new Promise(resolve => {
            const onSimClick = () => {
                resolve()
                sim.removeEventListener('click', onSimClick)
            }

            sim.addEventListener('click', onSimClick)
        })

        c++
    } while (c <= Infinity && !pare)
}

async function parar() {
    const verEstatisticas = document.getElementById('estatisticas')
    verEstatisticas.classList.remove('hidden')
    sim.classList.add('hidden')
    nao.classList.add('hidden')
}

function verEstatisticas() {
    let pessoasCom21AnosOuMais = 0
    let somaIdades = 0
    let contadorPessoas = 0

    for (let pessoa of dados) {
        somaIdades = parseFloat(somaIdades + pessoa.idade)

        if (pessoa.idade >= 21) {
            pessoasCom21AnosOuMais++
        }

        contadorPessoas++
    }

    let media = somaIdades / contadorPessoas

    const res = document.getElementById('res')
    res.innerHTML = `Quantidade de idades digitadas: ${dados.length}. <br> Média de idade do grupo: ${media} anos. <br> Quantidade de pessoas com 21 anos ou mais: ${pessoasCom21AnosOuMais} pessoa(s)`
}