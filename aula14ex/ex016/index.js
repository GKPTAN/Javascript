function contar() {
    let c = document.getElementById('n1')
    let fim = document.getElementById('n2')
    let raz = document.getElementById('step')
    var res = document.getElementById('res')
    if (c.value.length == 0 || fim.value.length == 0 || raz.value.length == 0) {
        res.innerHTML = 'IMPOSSÍVEL CONTAR'
        //window.alert('[ERRO] FALTAM DADOS!!!!!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(c.value)
        let f = Number(fim.value)
        let r = Number(raz.value)
        if (r <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //CONTAGEM CRESCENTE
            for(let c = i;c <= f;c += r) {
                res.innerHTML += `${c} 👉 `
            }
            res.innerHTML += '🏁'
        } else {
            //CONTAGEM DESCRESCENTE
            for(let c = i;c >= f;c -= r) {
                res.innerHTML += `${c} 👉 `
            }
            res.innerHTML += '🏁'
        }
    }
}

function limpar() {
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
    document.getElementById('step').value = ''
    res.innerHTML = ''
}