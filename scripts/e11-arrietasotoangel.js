function lanzarDados() {
    return Math.floor(Math.random() * 6) + 1; 
}

function simularLanzamientos(cantidad) {
    const resultados = Array(13).fill(0);

    for (let i = 0; i < cantidad; i++) {
        const dado1 = lanzarDados();
        const dado2 = lanzarDados();
        const suma = dado1 + dado2;
        resultados[suma]++;
    }

    for (let i = 2; i <= 12; i++) {
        console.log(`Resultado ${i}: ${resultados[i]} veces.`);
    }
}

simularLanzamientos(36000);