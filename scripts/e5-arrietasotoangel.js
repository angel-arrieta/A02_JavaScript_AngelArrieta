class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    resumen() {
        return `Título: "${this.titulo}", Autor: ${this.autor}, Páginas: ${this.paginas}`;
    }
}

const libros = [
    new Libro("Cien años de soledad", "Gabriel García Márquez", 417),
    new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1023),
    new Libro("El Principito", "Antoine de Saint-Exupéry", 96),
];

libros.forEach(libro => {
    alert(libro.resumen());
});