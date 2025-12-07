class Animal {
    constructor(id, name, age, specie, sexo) {
        this.id = id,
        this.name = name;
        this.age = age;
        this.specie = specie;
        this.sexo = sexo;
    }

    getId() {
        return this.id;
    };
    setId(id) {
        this.id = id;
    };
    getName() {
        return this.name;
    };
    setName(name) {
        this.name = name;
    };
    getAge() {
        return this.age;
    };
    setAge(age) {
        this.age = age;
    };
    getSpecie() {
        return this.specie;
    };
    setSpecie(specie) {
        this.specie = specie;
    };
    getSexo() {
        return this.sexo;
    };
    setSexo(sexo) {
        this.sexo = sexo;
    };

    falar(msg) {
        if (typeof msg === 'undefined') {
            console.log(`Meu nome é ${this.name}, e sou ${this.specie.endsWith("a") ? 'uma' : 'um'} ${this.specie}`);
        } else {
            console.log(msg);
        };
    };
}

export default Animal;