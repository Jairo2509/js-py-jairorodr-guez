const palabras = ["Aceituna", "Murciélago", "Educación", "Aeropuerto", "Otorrinolaringólogo", "Euforia", "Aceite", "Paleontólogo", "Arquitectura", "Hipopótamo"];
const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const palabra = palabras[getRandomInt(0, palabras.length - 1)];

let contador = 0;
for (const letra of palabra.toLowerCase()) {
  if (vocales.includes(letra)) {
    contador++;
  }
}

console.log(`La palabra seleccionada es "${palabra}" y tiene ${contador} vocales.`);
