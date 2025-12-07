import Animal from "./Animal.js";
import Gato from "./Gato.js";
import Cachorro from "./Cachorro.js";

function criarAnimal() {
    const animal = new Animal(0, "bolinha", 27, "abelha", "Macho");
    animal.falar();

    const dog = new Cachorro(1, "Frank", 11, "cachorro", "Macho", "caramelo");
    dog.latir();
    dog.falar();
    Cachorro.correr();

    const cat = new Gato(2, "tampinha", 5, "gato", "Macho", "preto");
    cat.miar();
    cat.falar();

    console.log(`o id de ${animal.getName()} é ${animal.getId()}`);
    console.log(`a idade de ${dog.getName()} é ${dog.getAge()} anos`);
    console.log(`a cor de ${cat.getName()} é ${cat.getColor()}`);
    console.log("Errei a idade da abelha...");
    animal.setAge(4);
    console.log(`A idade da ${animal.getSpecie()} é ${animal.getAge()} dias.`);
}

criarAnimal();