
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const numero = getRandomInt(1, 10);

console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
