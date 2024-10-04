let num1 = 0
let num2 = 0
do {
    if (Number.isNaN(num1) == true){
        alert("El valor introducido no coincide con un número")
        num1 = Number.parseFloat(prompt("Introduce un valor numerico"))
    }else{
        num1 = Number.parseFloat(prompt("Introduce un número"))
    }
} while (Number.isNaN(num1) == true);

do {
    if (Number.isNaN(num2) == true){
        alert("El valor introducido no coincide con un número")
        num2 = Number.parseFloat(prompt("Introduce otro valor numerico"))
    }else{
        num2 = Number.parseFloat(prompt("Introduce otro número"))
    }
} while (Number.isNaN(num2) == true);

let suma = num1 + num2

if (Number.isInteger(suma) == false){
    suma = suma.toFixed(2)
}

prompt(num1 + " + " + num2 + " = " + suma)