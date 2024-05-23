function contagem() {
    var res = document.getElementById('res');
    for(var c = 10;c >=3;c--) {
        res.innerHTML += ` ${c},`;
    };
    res.innerHTML += ` ACABOU!`;
};