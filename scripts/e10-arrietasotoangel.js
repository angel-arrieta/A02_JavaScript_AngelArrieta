function obtenerDiasDelMes(mes) {
    switch (mes) {
        case 1: // Enero
        case 3: // Marzo
        case 5: // Mayo
        case 7: // Julio
        case 8: // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            return 31;
        case 4: // Abril
        case 6: // Junio
        case 9: // Septiembre
        case 11: // Noviembre
            return 30;
        case 2: // Febrero
            return 28;
        default:
            return "Mes inválido";
    }
}

const mes = parseInt(prompt("Ingresa un número entre 1 y 12 representando un mes:"));

if (mes >= 1 && mes <= 12) {
    const dias = obtenerDiasDelMes(mes);
    alert(`El mes ${mes} tiene ${dias} días.`);
} else {
    alert("Por favor, ingresa un número válido entre 1 y 12.");
}
