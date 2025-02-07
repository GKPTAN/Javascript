let pos = 0;
let box = document.getElementById("box");
function adicionarTag() {
    let p = document.createElement("p");
    let node = document.createTextNode("texto criado a partir de javascript");
    p.appendChild(node);
    const div = document.getElementById("demo");
    div.appendChild(p);
};
function removerFilho() {
    let parent = document.getElementById("demo");
    let child = document.getElementById("artigo");
    parent.removeChild(child);
};
function mudarFilho() {
    let p = document.createElement("p");
    let node = document.createTextNode("novo parágrafo");
    p.appendChild(node);

    let pai = document.getElementById("demo");
    let filho = document.getElementById("detalhes");
    pai.replaceChild(p, filho);
};
function animation() {
    let tempo = setInterval(move, 10);

    function move() {
        if (pos >= 150) {
            clearInterval(tempo);
        } else {
            pos += 1;
            box.style.left = pos+"px";
        };
    };
};