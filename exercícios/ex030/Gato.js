import Animal from "./Animal.js";

class Gato extends Animal {
    constructor(id, name, age, specie, sexo, color) {
        super(id, name, age, specie, sexo);
        this.color = color;
    };
    
    getColor() {
        return this.color;
    };
    setColor(color) {
        this.color = color;
    };

    miar() {
        console.log(`MIAU, eu sou ${this.name}`)
    }
}

export default Gato;