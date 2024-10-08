function decodificarROT13(cadena) {
    return cadena.split('').map(caracter => {
        if (caracter >= 'A' && caracter <= 'Z') {
            return String.fromCharCode((caracter.charCodeAt(0) - 65 + 13) % 26 + 65);
        }
        else if (caracter >= 'a' && caracter <= 'z') {
            return String.fromCharCode((caracter.charCodeAt(0) - 97 + 13) % 26 + 97);
        }
        else {
            return caracter;
        }
    }).join('');
}

const cadenaCodificada = "Uryyb Jbeyq!";
const cadenaDecodificada = decodificarROT13(cadenaCodificada);

console.log(cadenaDecodificada);

const abc = "abcdefghijklmnopqrstuvwxyz";
const abcDecodificado = decodificarROT13(abc);

console.log(abcDecodificado);