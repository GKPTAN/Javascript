let numeros = [];
let res = document.getElementById('res');

function contar() {
    for (c = 0; c <= 40; c = c + 5) {
        numeros.push(c);
        res.innerHTML += `${numeros.join(', ')}`
    };
};