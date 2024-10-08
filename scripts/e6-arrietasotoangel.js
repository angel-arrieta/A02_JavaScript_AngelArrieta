function filtrarYTransformar(numeros) {
    return numeros
        .filter(num => num % 2 !== 0)
        .map(num => num * 2);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = filtrarYTransformar(numeros);

console.log(resultado);