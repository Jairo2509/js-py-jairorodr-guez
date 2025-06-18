import random


palabras = [
    "Aceituna",
    "Murciélago",
    "Educación",
    "Aeropuerto",
    "Otorrinolaringólogo",
    "Euforia",
    "Aceite",
    "Paleontólogo",
    "Hipopótamo",
    "Arquitectura"
]


def contar_vocales(palabra):
    vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"
    lista_vocales = [letra for letra in palabra if letra in vocales]
    return lista_vocales


palabra_seleccionada = random.choice(palabras)
vocales_encontradas = contar_vocales(palabra_seleccionada)

print(f"Palabra seleccionada: {palabra_seleccionada}")
print(f"Vocales encontradas: {', '.join(vocales_encontradas)}")
print(f"Cantidad de vocales: {len(vocales_encontradas)}")
