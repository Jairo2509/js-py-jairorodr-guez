function getRandomInt(minimo, maximo) {
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

const number = getRandomInt(1, 100);

if (number % 2 === 0) {
    console.log(`El número ${number} es PAR`);
} else {
    console.log(`El número ${number} es IMPAR`);
}
