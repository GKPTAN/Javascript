function contagem() {
    var res = document.getElementById('res')
    for(var c = 6;c <= 11;c++) {
        res.innerHTML += ` ${c},`
    }
    res.innerHTML += ` ACABOU!`
}