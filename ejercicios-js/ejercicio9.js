const numeros = [10, 3, 45, -7, 22, 0, 15];


const mayor = Math.max(...numeros);

const menor = Math.min(...numeros);

console.log(`Array: [${numeros.join(', ')}]`);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);
