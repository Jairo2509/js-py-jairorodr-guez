
const numeros = [20, 8, 3, 15, 4];


const suma = numeros.reduce((acum, actual) => acum + actual, 0);


console.log(`El array es: [${numeros.join(', ')}]`);
console.log(`La suma de todos sus elementos es: ${suma}`);
