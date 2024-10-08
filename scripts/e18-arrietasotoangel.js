function calcularPrecioFinal(precioBase, descuentos) {
    if (typeof precioBase !== 'number' || precioBase <= 0) {
        throw new Error("El precio base debe ser un número positivo.");
    }
    for (const descuento of descuentos) {
        if (typeof descuento !== 'number' || descuento < 0 || descuento > 100) {
            throw new Error(`El descuento ${descuento} no es válido. Debe estar entre 0 y 100.`);
        }
    }

    let precioFinal = precioBase;
    for (const descuento of descuentos) {
        precioFinal -= precioFinal * (descuento / 100);
    }

    return precioFinal;
}

function mostrarPrecioFinal(precioBase, descuentos) {
    try {
        const precioFinal = calcularPrecioFinal(precioBase, descuentos);
        console.log(`El precio final después de aplicar los descuentos es: $${precioFinal.toFixed(2)}`);
    } catch (error) {
        console.error(error.message);
    }
}

mostrarPrecioFinal(100, [10, 20]);
mostrarPrecioFinal(150, [5, 15, 10]);

mostrarPrecioFinal(100, [10, 120]);