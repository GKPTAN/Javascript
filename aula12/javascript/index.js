function carregar() {
    var p = document.getElementById('hora')
    var img = document.getElementById('foto')
    var footer = document.querySelector('footer')
    var titulo = document.querySelector('h1')
    var data = new Date()
    var hora = data.getHours()
    p.innerHTML = `Agora são ${hora} horas`
    if (hora > 5 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#0863A5'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F3B03C'
        footer.style.color = 'black'
        titulo.style.color = 'black'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#081537'
    }
}