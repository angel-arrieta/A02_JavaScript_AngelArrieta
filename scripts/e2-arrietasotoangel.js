let cadena = "bauuuba"
let veces = 1

do {
    if (Number.isNaN(veces) == true || Number.isInteger(veces) == false || veces < 0){
        alert("El valor introducido no sigue las condiciones indicadas")
        veces = Number.parseInt(prompt("Introduce un número entero mayor de 0"))
    }else{
        veces = Number.parseInt(prompt("Introduce un número entero mayor de 0"))
    }
} while (Number.isNaN(veces) == true || Number.isInteger(veces) == false || veces < 0);

let repetición = ""

for (let i = 1; i <= veces; i++){
    repetición += " " + cadena
}
alert(repetición)