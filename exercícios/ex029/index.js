var code = 0;
function criarPessoa() {
    let name = document.getElementById("edt_name").value;
    let height = document.getElementById("edt_height").value;
    let weight = document.getElementById("edt_weight").value;
    console.log("Criando uma nova pessoa...");
    const pessoa1 = new Pessoa(++code, "Guilherme", 166, 45);
    pessoa1.falar();

    // const pessoa2 = new Pessoa(++code, name, height, weight);
    // pessoa2.falar();
    
    const pessoa3 = new OutraPessoa(++code, name, height, weight, "Cientista");
    pessoa3.falar(`${pessoa3.getName()} está feliz hoje.`);
    pessoa3.correr();
    pessoa3.falarProfissao();
    document.getElementById("edt_code").value = code;

    console.log("A pessoa é: ");
    console.log("Código: " + pessoa3.getCode());
    console.log("Nome: " + pessoa3.getName());
    console.log("Altura: " + pessoa3.getHeight());
    console.log("Peso: " + pessoa3.getWeight());

    OutraPessoa.pensando();
};