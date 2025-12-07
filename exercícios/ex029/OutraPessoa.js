class OutraPessoa extends Pessoa {
    constructor(code, name, height, weight, profissao) {
        super(code, name, height, weight, profissao);
    };

    correr() {
        console.log(`${this.name} está correndo...`);
    };

    getProfissao() {
        return this.profissao;
    }

    setProfissao(profissao) {
        this.profissao = profissao;
    }

    falarProfissao() {
        if (this.profissao) {
            console.log(`Minha profissão é ${this.profissao}`);
        } else {
            console.log("Nenhuma profissão definida.");
        };
    };

    static pensando() {
        console.log("Estou pensando...");
    };
};