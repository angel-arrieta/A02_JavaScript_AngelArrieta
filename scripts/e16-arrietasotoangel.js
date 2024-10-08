class Personaje {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza; 
        this.nivel = 1;
        this.puntosDeVida = 100;
    }

    atacar(enemigo) {
        const dano = 10; 
        enemigo.recibirDano(dano); 
        console.log(`${this.nombre} ataca a ${enemigo.nombre} y le causa ${dano} puntos de daño.`);
    }

    recibirDano(dano) {
        this.puntosDeVida -= dano;
        if (this.puntosDeVida <= 0) {
            this.puntosDeVida = 0; 
            this.derrotado();
        }
        console.log(`${this.nombre} tiene ${this.puntosDeVida} puntos de vida restantes.`);
    }

    recuperarVida() {
        if (this.puntosDeVida < 100) {
            this.puntosDeVida += 20;
            if (this.puntosDeVida > 100) {
                this.puntosDeVida = 100;
            }
            console.log(`${this.nombre} recupera vida. Ahora tiene ${this.puntosDeVida} puntos de vida.`);
        } else {
            console.log(`${this.nombre} ya tiene el máximo de vida.`);
        }
    }

    derrotado() {
        alert(`${this.nombre} ha sido derrotado! Se restablece a su estado inicial.`);
        this.nivel = 1;
        this.puntosDeVida = 100;
    }
}

const personajes = [
    new Personaje("Aragorn", "Humano"),
    new Personaje("Legolas", "Elfo")
];

console.log("Inicio de la aventura!");
personajes[0].atacar(personajes[1]);
personajes[1].recibirDano(5);
personajes[1].recuperarVida();
personajes[1].recibirDano(100);