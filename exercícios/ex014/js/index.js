const sexoMasculino = document.getElementById('sexo-masculino')
const sexoFeminino = document.getElementById('sexo-feminino')
const salario = document.getElementById('salario')
let dados = []

function adicionarFuncionario() {
    const nomeFuncionario = document.getElementById('nome').value
    const aviso = document.getElementById('aviso')

    if (nomeFuncionario.length === 0) {
        document.getElementById('nome').setCustomValidity('Campo obrigatório')
        document.getElementById('nome').reportValidity()
        return
    } else {
        document.getElementById('nome').setCustomValidity('')
    }

    if (!sexoMasculino.checked && !sexoFeminino.checked) {
        aviso.innerHTML = '*Opção obrigatória'
        return
    } else {
        aviso.innerHTML = ''
    }

    if (salario.value.trim() === '' || parseFloat(salario.value) < 0) {
        salario.setCustomValidity('Campo obrigatório')
        salario.reportValidity()
        return
    } else {
        salario.setCustomValidity('')
    }

    let sexo = ''

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value
    } else if (sexoFeminino.checked) {
        sexo = sexoFeminino.value
    }

    const valorSalario = parseFloat(salario.value)

    const funcionario = {
        nome: nomeFuncionario,
        sexo: sexo,
        salario: valorSalario
    }

    dados.push(funcionario)

    document.getElementById('nome').value = ''
    document.getElementById('sexo-masculino').checked = false
    document.getElementById('sexo-feminino').checked = false
    document.getElementById('salario').value = ''

    window.alert("funcionário adicionado com sucesso")
}

function salarioTotal() {
    const res = document.getElementById('res')
    let totalSalariosHomens = 0
    let totalSalariosMulheres = 0

    for (let funcionario of dados) {
        if (funcionario.sexo === 'Masculino') {
            totalSalariosHomens += funcionario.salario
        } else if (funcionario.sexo === 'Feminino') {
            totalSalariosMulheres += funcionario.salario
        }
    }

    res.style.backgroundColor = 'white'
    res.style.color = 'black'
    res.style.padding = '30px'
    res.style.borderRadius = '20px'
    res.innerHTML = `Total de salários do sexo Masculino: R$${totalSalariosHomens} reais<br> Total de salários do sexo Feminino: R$${totalSalariosMulheres} reais`
}