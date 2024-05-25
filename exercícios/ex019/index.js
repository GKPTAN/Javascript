let res = document.getElementById('res');

function contar() {
    res.innerHTML = '';
    for (let c = 0; c <= 40; c += 5) {
        setTimeout(() => {
            res.innerHTML += `${c}, `; 
        }, c * 200);
    };

    setTimeout(() => {
        res.innerHTML += `acabou!`
    }, (40 + 5) * 200);
};