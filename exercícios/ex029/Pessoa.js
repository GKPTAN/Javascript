class Pessoa {
    constructor(code, name, height, weight, profissao) {
        this.code = code;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.profissao = profissao;
    }

    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }

    falar(msg) {
        if (typeof msg === 'undefined') {
            console.log(`Olá, meu nome é ${this.name}, tenho ${this.height}cm de altura e peso ${this.weight}kg.`);
        } else {
            console.log(msg);
        }
    };
}