const minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true;
    setTimeout(() => {
        if (sucesso) {
            resolve("Operação concluida com sucesso!");
        } else {
            reject("Ocorreu um erro!")
        }
    }, 2000);
});
minhaPromise.then((resultado) => {console.log(resultado);}).catch((error) => {console.log(error)});

const pendente = new Promise ((resolve, reject) => {
    setTimeout(() => reject("Timeout!"), 10000);
});
console.log(pendente);
pendente.catch(console.log);
function* meuGerador() {
    yield 1;
    yield 2;
    yield 3;
};
let gerador = meuGerador();
console.log(gerador.next());
console.log(gerador.next());
console.log(gerador.next());
console.log(gerador.next());

function* gerarNumeros() {
    for (let i = 1; i <= 10; i++) {
        yield i;
    };
};
let geradorDeNumeros = gerarNumeros();
let contador = document.getElementById("texto");
const intervalo = setInterval(() => {
    const {value , done} = geradorDeNumeros.next();
    if (done) {
        clearInterval(intervalo);
        contador.innerHTML = "FIM";
    } else {
        contador.innerHTML = value;
    };
}, 1000);