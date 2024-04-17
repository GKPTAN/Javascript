const sexoMasculino = document.getElementsByName("sexo")[0]
const sexoFeminino = document.getElementsByName("sexo")[1]
const salario = document.getElementById('salario')
let dados = []

function adicionarFuncionario() {
    const nomeFuncionario = document.getElementById('nome').value
    let sexo;
    const valorSalario = Number(salario.value)
    const aviso = document.getElementById('aviso')

    if (nomeFuncionario.length === 0) {
        document.getElementById('nome').setCustomValidity('Campo obrigatório')
        document.getElementById('nome').reportValidity()
        return
    }

    if (!sexoMasculino.checked && !sexoFeminino.checked) {
        aviso.style.visibility = 'none'
        return
    } else {
        aviso.style.visibility = 'hidden'
    }

    if (isNaN(salario) || salario.length === 0 || salario < 0) {
        salario.setCustomValidity('Campo obrigatório')
        salario.reportValidity()
        return
    }

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value
    } else if (sexoFeminino.checked) {
        sexo = sexoFeminino.value
    }

    const funcionario = {
        nome: nomeFuncionario,
        sexo: sexo,
        salario: valorSalario
    }

    dados.push(funcionario)

    document.getElementById('nome').value = ''
    document.getElementById('sexo').checked = false
    document.getElementById('salario').value = ''

    window.alert("funcionário adicionado")
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