let numeros = [];
const res = document.getElementById('res');

function contar() {
    var c = 0;
    var intervalo = setInterval(() => {
        do {
            numeros.push(c);
            parar();
            res.innerHTML = ` ${numeros.join(', ')}`;
            c += 3;
        } while (c <= 1);
    }, 1000);

    function parar() {
        if (numeros.length === 11) {
            clearInterval(intervalo);
            numeros.push('acabou!');
        };
    };
};

/*corrigir código*/
