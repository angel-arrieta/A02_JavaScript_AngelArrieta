class Producto {
    constructor(nombre, categoria, precio, cantidadEnStock = 0) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = this.validarPrecio(precio);
        this.cantidadEnStock = this.validarCantidad(cantidadEnStock);
    }

    validarPrecio(precio) {
        if (precio < 0) {
            console.error("El precio no puede ser negativo. Se establece en 0.");
            return 0; 
        }
        return precio; 
    }
    
    validarCantidad(cantidad) {
        if (cantidad < 0) {
            console.error("La cantidad no puede ser negativa. Se establece en 0.");
            return 0; 
        }
        return cantidad;
    }
    
    actualizarStock(cantidad) {
        this.cantidadEnStock += cantidad; 
        
        if (this.cantidadEnStock < 0) {
            console.error(`La cantidad de "${this.nombre}" no puede ser negativa. Se establece en 0.`);
            this.cantidadEnStock = 0;
        }
        console.log(`Cantidad en stock de "${this.nombre}": ${this.cantidadEnStock}`);
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        if (producto instanceof Producto) {
            this.productos.push(producto);
            console.log(`Producto "${producto.nombre}" agregado al inventario.`);
        } else {
            console.error("El objeto no es una instancia de Producto.");
        }
    }

    eliminarProducto(nombre) {
        const indice = this.productos.findIndex(p => p.nombre === nombre);
        if (indice !== -1) {
            this.productos.splice(indice, 1); 
            console.log(`Producto "${nombre}" eliminado del inventario.`);
        } else {
            console.error(`Producto "${nombre}" no encontrado en el inventario.`);
        }
    }

    buscarProducto(nombre) {
        const producto = this.productos.find(p => p.nombre === nombre);
        if (producto) {
            console.log(`Información del producto:`);
            console.log(`Nombre: ${producto.nombre}`);
            console.log(`Categoría: ${producto.categoria}`);
            console.log(`Precio: $${producto.precio}`);
            console.log(`Cantidad en Stock: ${producto.cantidadEnStock}`);
        } else {
            console.error(`Producto "${nombre}" no encontrado en el inventario.`);
        }
    }
}

const inventario = new Inventario();

const pocion = new Producto("Poción de Vida", "Poción", 50, 10);
const varita = new Producto("Varita Mágica", "Varita", 150, 5);
const libro = new Producto("Libro de Hechizos", "Libro", 30, 2);

inventario.agregarProducto(pocion);
inventario.agregarProducto(varita);
inventario.agregarProducto(libro);

inventario.buscarProducto("Poción de Vida");

pocion.actualizarStock(5); 
pocion.actualizarStock(-3); 
pocion.actualizarStock(-15);

inventario.eliminarProducto("Varita Mágica");
inventario.buscarProducto("Varita Mágica");