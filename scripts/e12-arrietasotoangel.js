function findPairs(num1, num2) {
    if (num1 < 1 || num1 > 100 || num2 < 1 || num2 > 100) {
        alert("Ambos números deben estar entre 1 y 100.");
        return;
    }
    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);
    let pares = [];

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    if (pares.length > 0) {
        alert(`Los números pares entre ${inicio} y ${fin} son: ${pares.join(", ")}`);
    } else {
        alert(`No hay números pares entre ${inicio} y ${fin}.`);
    }
}

let num1 = parseInt(prompt("Ingresa el primer número (entre 1 y 100):"));
let num2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 100):"));

findPairs(num1, num2);
