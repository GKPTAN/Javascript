// usando o operador de bits xor ^
// criptografia simples
const mensagem = "amigo";
const chave = "secret";
let mensagemSecreta = "";
for (let i = 0; i < mensagem.length; i++) {
    mensagemSecreta += String.fromCharCode(mensagem.charCodeAt(i) ^ chave.charCodeAt(i % chave.length));
};
console.log(mensagemSecreta);

// descriptografar mensagem
let mensagemRevelada = "";
for (let i = 0; i < mensagem.length; i++){
    mensagemRevelada += String.fromCharCode(mensagemSecreta.charCodeAt(i) ^ chave.charCodeAt(i % chave.length));
};
console.log(mensagemRevelada);