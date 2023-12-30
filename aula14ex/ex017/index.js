function calcular() {
    let num = document.getElementById('num')
    let n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    }
}