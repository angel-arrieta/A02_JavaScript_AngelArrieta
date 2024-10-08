// Definimos la clase Animal
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    hablar() {
        return `${this.nombre} hace un sonido.`;
    }
}

class Perro extends Animal {
    hablar() {
        return `${this.nombre} dice: ¡Guau!`;
    }
}

class Gato extends Animal {
    hablar() {
        return `${this.nombre} dice: ¡Miau!`;
    }
}

const miPerro = new Perro("Theo", 5);
const miGato = new Gato("Sombra", 3);

console.log(miPerro.hablar());
console.log(miGato.hablar());
