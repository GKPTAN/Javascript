function contar() {
    const res = document.getElementById('res')
    var c = 0
    do {
        setInterval(() => {
            res.innerHTML += ` ${c},`
        }, 1000);
        c = c + 3
    } while (c <= 30)
    console.log(res)
}