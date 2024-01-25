function comparar() {
    let number1 = Number(document.getElementById('num1').value)
    let number2 = Number(document.getElementById('num2').value)
    let res = document.getElementById('res')

    if (number1 > number2) {
        res.innerHTML = `O primeiro número é maior, pois ${number1} é maior que ${number2}`
    } else {
        if (number1 < number2) {
            res.innerHTML = `O segundo número é maior, pois ${number2} é maior que ${number1}`
        } else {
            res.innerHTML = 'Não existe valor maior, os dois números são iguais'
        }
    }

    if (document.getElementById('num1').value.lenght === 0|| document.getElementById('num2').value.length === 0) {
        res.innerHTML = ''
    }
}

function requirido() {
    document.getElementById('num1').reportValidity()
    document.getElementById('num2').reportValidity()
}

function handleKeyDown(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.getElementById(nextInputId).focus()
    }
}

function limpar() {
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    res.innerHTML = ''
}