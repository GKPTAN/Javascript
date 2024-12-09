let vetor = new Array(20);

function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = sorteio(0, 99);
};
    
console.log(vetor);

for (let i = 0; i < vetor.length; i++) {
    for (let j = i + 1; j < vetor.length; j++) {
        if (vetor[i] > vetor[j]) {
            let temp = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = temp;
        };
    };
};

console.log(vetor);