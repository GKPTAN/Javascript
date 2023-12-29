function clicar() {
var ano = new Date()
var anoAtual = ano.getFullYear()
var nasc = document.getElementById('nasc')
var res = document.getElementById('res')
if (nasc.value.length == 0 || nasc.value > anoAtual) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var sexo = document.getElementsByName('sexo')
    var idade = anoAtual - Number(nasc.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.display = 'block'
    img.style.margin = 'auto'
    img.style.paddingTop = '10px'
    if (sexo[0].checked) {
        if (idade > 0 && idade < 2) {
            //bebê
            gênero = 'bebê'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} ano.`
            img.setAttribute('src', 'imagens/bebe.png')
        } else if (idade >= 2 && idade < 12) {
            //criança
            gênero = 'criança'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/kid-menino.png')
        } else if (idade >= 12 && idade < 18) {
            //adolescente
            gênero = 'adolescente'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/adolescente-mas.png')
        } else if (idade >= 18 && idade < 30) {
            //jovem
            gênero = 'jovem'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/jovem-homem.png')
        } else if (idade >= 30 && idade < 60) {
            //adulto
            gênero = 'homem'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/homem.png')
        } else {
            //idoso
            gênero = 'idoso'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/velho.png')
        }
    } else if (sexo[1].checked) {
        if (idade > 0 && idade < 2) {
            //bebê
            gênero = 'bebê'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} ano.`
            img.setAttribute('src', 'imagens/bebe.png')
        } else if (idade >= 2 && idade < 12) {
            //criança
            gênero = 'criança'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/kid-menina.png')
        } else if (idade >= 12 && idade < 18) {
            //adolescente
            gênero = 'adolescente'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/adolescente-fem.png')
        } else if (idade >= 18 && idade < 30) {
            //jovem
            gênero = 'jovem'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/jovem-mulher.png')
        } else if (idade >= 30 && idade < 60) {
            //adulto
            gênero = 'mulher'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/mulher.png')
        } else {
            //idoso
            gênero = 'idosa'
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
            img.setAttribute('src', 'imagens/velha.png')
        }
    }
    res.appendChild(img)
}
}