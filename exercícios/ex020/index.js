let res = document.getElementById('res');

function contar() {
    res.style.opacity = 1;
    res.innerHTML = '';
    for (let c = 100, delay = 0; c >= 0; c -= 10) {
        setTimeout(() => {
            res.innerHTML += `${c}, `; 
        }, delay);
        delay += 1000;
    };

    setTimeout(() => {
        res.innerHTML += `acabou!`
    }, (100 / 10 + 1) * 1000);
};