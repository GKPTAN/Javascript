const produtos = [
    {name: "Smartphone", price: 7746, deliveryDate: new Date(2025, 3, 1)},
    {name: "notebook", price: 15384.44, deliveryDate: new Date(2025, 6, 14)}
];
const localidade = 'pt-br';
const resultado = produtos.map((produto) => {
    return {
        name: produto.name,
        price: produto.price.toLocaleString(localidade, {
            style: 'currency',
            currency: 'BRL'
        }),
        deliveryDate: produto.deliveryDate.toLocaleString(localidade)
    };
});

console.log(resultado);