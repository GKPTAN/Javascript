function mensagem() {
    var name = document.getElementById('name').value
    var res = document.getElementById('res')
    res.innerHTML = `Olá ${name}, é um prazer te conhecer!`
}