function generarContrasena() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longitud = Math.floor(Math.random() * (40 - 16 + 1)) + 16; // Longitud entre 16 y 40
    let contrasena = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }

    return contrasena;
}

const nuevaContrasena = generarContrasena();
console.log(`Contraseña generada (longitud ${nuevaContrasena.length}): ${nuevaContrasena}`);
