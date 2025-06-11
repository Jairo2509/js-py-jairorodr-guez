function getRandomInt(minimo, maximo) {
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

const number = getRandomInt(1, 100);

if (esPrimo(number)) {
    console.log(`El número ${number} es primo`);
} else {
    console.log(`El número ${number} no es primo`);
}
