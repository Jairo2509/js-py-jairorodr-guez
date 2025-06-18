import random


numero = random.randint(1, 100)

print(f"El número generado es: {numero}")

if numero % 2 == 0:
    print("El número es PAR.")
else:
    print("El número es IMPAR.")

