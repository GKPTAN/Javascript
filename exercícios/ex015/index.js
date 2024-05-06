const idadePessoa = document.getElementById('idade')
const sexoMasculino = document.getElementById('sexo-masculino')
const sexoFeminino = document.getElementById('sexo-feminino')
let dados = []

function adicionarDados() {
    const nome = document.getElementById('nome').value
    const idade = Number(idadePessoa.value)
    const aviso = document.getElementById('aviso')

    if (nome.length === 0) {
        document.getElementById('nome').setCustomValidity('Campo Obrigatório')
        document.getElementById('nome').reportValidity()
        return 
    } else {
        document.getElementById('nome').setCustomValidity('')
    }

    if (idadePessoa.value.trim() === '' || idadePessoa.value < 1) {
        document.getElementById('idade').setCustomValidity('Campo Obrigatório')
        document.getElementById('idade').reportValidity()
        return
    } else {
        document.getElementById('idade').setCustomValidity('')
    }

    if (!sexoMasculino.checked && !sexoFeminino.checked) {
        aviso.innerHTML = '*Opção Obrigatória'
        return
    } else {
        aviso.innerHTML = ''
    }

    let sexo = ''

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value
    } else if (sexoFeminino.checked) {
        sexo = sexoFeminino.value
    }

    const pessoa = {
        nome: nome,
        idade: idade,
        sexo: sexo
    }

    dados.push(pessoa)

    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('sexo-masculino').checked = false
    document.getElementById('sexo-feminino').checked = false

    window.alert("Dados adicionados com sucesso")
}

function verEstatisticas() {
    const res = document.getElementById('res')
    let idadePessoaMaisVelha = 0
    let idadeMulherMaisJovem = 999
    let somaIdades = 0
    let quantidadeHomensMaisDe30 = 0
    let quantidadeMulheresMenosDe18 = 0
    let nomePessoaMaisVelha = ''
    let nomeMulherMaisJovem = ''
    let mediaIdade = 0

    if (dados.length === 0) {
        res.style.backgroundColor = 'white'
        res.innerHTML = '[ERRO] Sem dados disponíveis'
    }
}