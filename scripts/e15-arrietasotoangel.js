// Función que recibe un array de objetos (productos) y calcula la suma total de sus precios
function calcularSumaPrecios(productos) {
    // Utilizamos el método reduce() para acumular la suma de los precios
    // suma es el acumulador y producto es el objeto actual
    return productos.reduce((suma, producto) => suma + producto.precio, 0);
}

// Escenario de prueba 1: Lista de productos con diferentes precios
const listaProductos1 = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 250 },
    { nombre: "Producto 3", precio: 75 },
    { nombre: "Producto 4", precio: 300 }
];

// Llamamos a la función y mostramos el resultado
const sumaTotal1 = calcularSumaPrecios(listaProductos1);
console.log(`Escenario 1 - La suma total de los precios es: ${sumaTotal1}`);

// Escenario de prueba 2: Lista vacía (sin productos)
const listaProductos2 = [];

// Llamamos a la función y mostramos el resultado
const sumaTotal2 = calcularSumaPrecios(listaProductos2);
console.log(`Escenario 2 - La suma total de los precios es: ${sumaTotal2}`);

// Escenario de prueba 3: Lista con un solo producto
const listaProductos3 = [
    { nombre: "Producto Único", precio: 500 }
];

// Llamamos a la función y mostramos el resultado
const sumaTotal3 = calcularSumaPrecios(listaProductos3);
console.log(`Escenario 3 - La suma total de los precios es: ${sumaTotal3}`);

// Escenario de prueba 4: Lista de productos con precios cero
const listaProductos4 = [
    { nombre: "Producto 1", precio: 0 },
    { nombre: "Producto 2", precio: 0 },
    { nombre: "Producto 3", precio: 0 }
];

// Llamamos a la función y mostramos el resultado
const sumaTotal4 = calcularSumaPrecios(listaProductos4);
console.log(`Escenario 4 - La suma total de los precios es: ${sumaTotal4}`);

// Escenario de prueba 5: Lista con productos y precios negativos (devoluciones, por ejemplo)
const listaProductos5 = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: -50 },
    { nombre: "Producto 3", precio: 200 }
];

// Llamamos a la función y mostramos el resultado
const sumaTotal5 = calcularSumaPrecios(listaProductos5);
console.log(`Escenario 5 - La suma total de los precios es: ${sumaTotal5}`);
