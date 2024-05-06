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
    let nomePessoaMaisVelha = []
    let nomeMulherMaisJovem = []
    let media;
    let contadorPessoas = 0

    if (dados.length === 0) {
        res.style.backgroundColor = 'white'
        res.innerHTML = '[ERRO] Sem dados disponíveis'
    }

    for (let pessoa of dados) {
        somaIdades = somaIdades + pessoa.idade

        if (pessoa.idade > idadePessoaMaisVelha) {
            idadePessoaMaisVelha = pessoa.idade
            nomePessoaMaisVelha = [pessoa.nome]
        } else if (pessoa.idade === idadePessoaMaisVelha) {
            nomePessoaMaisVelha.push(pessoa.nome)
        }

        if (pessoa.sexo === 'Feminino' && pessoa.idade < idadeMulherMaisJovem) {
            idadeMulherMaisJovem = pessoa.idade
            nomeMulherMaisJovem = [pessoa.nome]
        } else if (pessoa.idade === idadeMulherMaisJovem) {
            nomeMulherMaisJovem.push(pessoa.nome)
        }

        if (pessoa.sexo === 'Masculino' && pessoa.idade > 30) {
            quantidadeHomensMaisDe30++
        }

        if (pessoa.sexo === 'Feminino' && pessoa.idade < 18) {
            quantidadeMulheresMenosDe18++
        }

        contadorPessoas++
    }

    media = somaIdades / contadorPessoas

    let mediaIdade = parseFloat(media)

    res.style.backgroundColor = 'white'
    res.innerHTML = `A(s) pessoa(s) mais velha(s) se chama(m):  (${nomePessoaMaisVelha.join(', ')}).<br>`
    res.innerHTML += `A(s) mulher(es) mais jovem(ns) se chama(m): (${nomeMulherMaisJovem.join(', ')}).<br>`
    res.innerHTML += `A média de idade do grupo de pessoas é de ${mediaIdade} anos de idade.<br>`
    res.innerHTML += `Quantidade de homens com mais de 30 anos: ${quantidadeHomensMaisDe30}<br>`
    res.innerHTML += `Quantidade de mulheres com menos de 18 anos: ${quantidadeMulheresMenosDe18}<br>`
}