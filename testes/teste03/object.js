const alvo = {a: 1};
const origem1 = {a: 2, b: 8};
const origem2 = {b: 7, c: 3, d: 4};
Object.assign(alvo, origem1, origem2);
console.log(alvo);

const meuMap = new Map([
    ["chave", "073126"],
    ["chave2", "973702"]
]);
console.log(meuMap);

const mapa = new Map();
mapa.set('nome', 'joão');
mapa.set('número', 42);
mapa.set('booleano', true);
console.log(mapa);
console.log(mapa.get('número'));
console.log(mapa.has('nome'));
console.log(mapa.has('idade'));
mapa.delete('número');
console.log(mapa.has('número'));
mapa.forEach((valor, chave) => {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
});
for (let [chave, valor] of meuMap) {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
};
meuMap.clear();
console.log(mapa.size);