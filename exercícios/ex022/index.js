let numeros = document.querySelectorAll('.vetor');
function vetores() {
    let vetor = new Array(8);
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = 999;
    };
    
    for (let i = 0; i < vetor.length; i++) {
        numeros[i].innerHTML = `${vetor[i]}`;
    };
}