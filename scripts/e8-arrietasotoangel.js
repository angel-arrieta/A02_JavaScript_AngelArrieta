class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = [];
    }
    agregarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            console.log(`Nota ${nota} agregada a ${this.nombre}.`);
        } else {
            console.log("La nota debe estar entre 0 y 10.");
        }
    }
    calcularPromedio() {
        if (this.notas.length === 0) {
            return 0;
        }
        const suma = this.notas.reduce((acc, curr) => acc + curr, 0);
        return suma / this.notas.length;
    }
    haAprobado() {
        const promedio = this.calcularPromedio();
        return promedio >= 6;
    }
}

const estudiante1 = new Estudiante("Juan", 20);

estudiante1.agregarNota(8);
estudiante1.agregarNota(9);
estudiante1.agregarNota(7);

const promedio = estudiante1.calcularPromedio();
console.log(`Promedio de ${estudiante1.nombre}: ${promedio.toFixed(2)}`); // Salida: Promedio de Juan: 8.00
console.log(`${estudiante1.nombre} ha ${estudiante1.haAprobado() ? 'aprobado' : 'no ha aprobado'}.`); // Salida: Juan ha aprobado.
