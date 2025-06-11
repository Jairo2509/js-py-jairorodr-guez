
const palabras = ["ornitorrinco", "miel", "javascript", "programacion", "amor"];


const palabra = palabras[Math.floor(Math.random() * palabras.length)];


const palabraInvertida = palabra.split('').reverse().join('');


console.log(`Palabra original: ${palabra}`);
console.log(`Palabra invertida: ${palabraInvertida}`);
