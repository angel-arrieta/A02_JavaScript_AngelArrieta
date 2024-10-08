function calcularSumaPrecios(productos) {
    return productos.reduce((suma, producto) => suma + producto.precio, 0);
}

const listaProductos = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 250 },
    { nombre: "Producto 3", precio: 75 },
    { nombre: "Producto 4", precio: 300 }
];

const sumaTotal = calcularSumaPrecios(listaProductos);
alert(`La suma total de los precios es: ${sumaTotal}`);