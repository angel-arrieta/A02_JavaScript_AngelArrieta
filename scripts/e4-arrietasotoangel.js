function aplanarYCalcularPromedio(matriz) {
    const aplanada = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            aplanada.push(matriz[i][j]);
        }
    }

    const suma = aplanada.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const promedio = suma / aplanada.length;

    return {
        aplanada,
        promedio
    };
}

const matriz = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

const resultado = aplanarYCalcularPromedio(matriz);
console.log("Matriz aplanada:", resultado.aplanada);
console.log("Promedio:", resultado.promedio);
