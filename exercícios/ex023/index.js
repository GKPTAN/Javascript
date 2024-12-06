let numeros = document.querySelectorAll('.vetor');
function vetores() {
    let vetor = new Array(10);
    let contador = 0;
    for (let i = 0; i < vetor.length; i++) {
        contador += 5
        vetor[i] = contador;
    };
    
    for (let i = 0; i < vetor.length; i++) {
        numeros[i].innerHTML = `${vetor[i]}`;
    };
}