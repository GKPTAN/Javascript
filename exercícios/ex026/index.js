function fibonacci(n) {
    if(n <= 0) {
        return [];
    };

    let fib = [];
    for(let i = 0; i < n; i++) {
        if(i === 0 || i === 1) {
            fib.push(1);
        } else {
            fib.push(fib[i - 1] + fib[i - 2]);
        };
    };

    return fib;
};

function gerarFibonacci() {
    const input = document.getElementById('termo');
    const res = document.getElementById('res');
    const n = parseInt(input.value);
    res.style.opacity = '1';

    if(isNaN(n) || n <= 0) {
        res.innerHTML = "Por favor, insira um número inteiro maior que zero(0)!!!";
        return;
    };
    const sequencia = fibonacci(n);

    res.innerHTML = `Sequência: ${sequencia.join(', ')}`;
};