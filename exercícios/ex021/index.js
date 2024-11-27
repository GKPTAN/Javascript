let res = document.getElementById('res');

function fibonacci() {
    let a = 0;
    let b = 1;
    let c = 1;
    res.style.opacity = 1;
    res.innerHTML = '';
    for (let i = 1; i <= 10; i += 1) {
        b = a + b;
        a = b - a;
        res.innerHTML += `${c}, `;
        c = b;
    };
};