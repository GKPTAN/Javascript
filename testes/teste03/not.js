// uso do sinal ~ (not) (~x = -(x + 1))
let a = ~-3; //saida 2 = ~-3 = -(-3 + 1)
// verificar se um valor existe em uma string ou array
const texto = "olá";
if(~texto.indexOf("mundo")) {
    console.log("Encontrado");
} else {
    console.log("Não existe");
};
// verificar se o número é impar ou par
const numero = 8;
if (numero & 1) {
    console.log("impar");
} else {
    console.log("par");
};
// converter números para inteiros de 32 bits
const numeral = 123.456;
const inteiro32Bits = ~~numeral;
console.log(inteiro32Bits);
// Calcular o complemento de um número
const numer = 10;
const complemento = ~numer;
console.log(complemento); // saida -11