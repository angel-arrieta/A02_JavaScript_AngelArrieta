let numeros = [1, 2, 3, 4, 5]
let pares = numeros.filter(numero => numero % 2 == 0)
alert("Numeros pares: " + pares)

let maximo = numeros.reduce((acumulador, numero) => Math.max(acumulador, numero))
alert("Numero mayor: " + maximo)

let dobles = numeros.map(numero => numero * 2)
alert("Numeros doblados: " + dobles)