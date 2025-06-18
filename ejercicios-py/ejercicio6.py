import random

palabras = ["hola", "mundo", "python", "programa", "cadena", "inverso", "ejemplo", "aleatorio"]

palabra = random.choice(palabras)

palabra_invertida = palabra[::-1]

print(f"La palabra seleccionada es: {palabra}")
print(f"La palabra invertida es: {palabra_invertida}")
