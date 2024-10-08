function isLeapYear(anio1, anio2) {
    if (anio1 < 2001 || anio1 > 2500 || anio2 < 2001 || anio2 > 2500) {
        alert("Ambos años deben estar entre 2001 y 2500.");
        return;
    }

    let inicio = Math.min(anio1, anio2);
    let fin = Math.max(anio1, anio2);

    let aniosBisiestos = [];

    for (let i = inicio; i <= fin; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            aniosBisiestos.push(i);
        }
    }

    if (aniosBisiestos.length > 0) {
        alert(`Los años bisiestos entre ${inicio} y ${fin} son: ${aniosBisiestos.join(", ")}`);
    } else {
        alert(`No hay años bisiestos entre ${inicio} y ${fin}.`);
    }
}

let ano1 = parseInt(prompt("Ingresa el primer año (entre 2001 y 2500):"));
let ano2 = parseInt(prompt("Ingresa el segundo año (entre 2001 y 2500):"));

isLeapYear(ano1, ano2);