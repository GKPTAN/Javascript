import Animal from "./Animal.js";

class Cachorro extends Animal {
    constructor(id, name, age, specie, sexo, race) {
        super(id, name, age, specie, sexo);
        this.race = race;
    };

    getRace() {
        return this.race;
    };
    setRace(race) {
        this.race = race;
    };

    latir() {
        console.log(`AU AU, eu sou ${this.name}, e tenho ${this.age} anos`);
    };

    falar(msg) {
        if (typeof msg === 'undefined') {
            console.log(`Eu sou ${this.sexo === "Fêmea" ? 'uma cachorra chamada' : 'um cachorro chamado'} ${this.name}`);
        } else {
            console.log(msg);
        };
    };

    static correr() {
        console.log("O cachorro está correndo...");
    };
}

export default Cachorro;