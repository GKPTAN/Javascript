function contar() {
    const res = document.getElementById('res')
    var c = 0
    do {
        res.innerHTML += ` ${c},`
        c = c + 3
    } while (c <= 30)
    console.log(res)
    res.innerHTML += ' acabou!'
}
