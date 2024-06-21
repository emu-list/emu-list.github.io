import json

# Función para solicitar datos del usuario
def obtener_datos_juego():
    nombre = input("Ingrese el nombre del juego: ")
    compatibilidad = input("Ingrese la compatibilidad (verde, amarillo, naranja, rojo): ")
    emulador = input("Ingrese el nombre del emulador: ")
    gpu = input("Ingrese el nombre de la GPU: ")
    color = input("Ingrese el color correspondiente (e.g., green, yellow, orange, red): ")

    return {
        "nombre": nombre,
        "compatibilidad": compatibilidad,
        "emulador": emulador,
        "gpu": gpu,
        "color": color
    }

# Función para agregar el juego al archivo JavaScript
def agregar_juego_a_js(juego):
    js_file = 'scripts.js'

    # Leer el contenido actual del archivo JavaScript
    with open(js_file, 'r') as file:
        js_content = file.readlines()

    # Buscar el lugar donde agregar el nuevo juego
    for i, line in enumerate(js_content):
        if line.strip() == 'const juegos = [':
            break

    # Crear la representación en cadena del nuevo juego
    nuevo_juego_str = f'''
    {{
        "nombre": "{juego['nombre']}",
        "compatibilidad": "{juego['compatibilidad']}",
        "emulador": "{juego['emulador']}",
        "gpu": "{juego['gpu']}",
        "color": "{juego['color']}"
    }}'''

    # Insertar el nuevo juego en el lugar correcto
    js_content.insert(i + 1, nuevo_juego_str + ',\n')

    # Escribir el contenido actualizado de nuevo al archivo JavaScript
    with open(js_file, 'w') as file:
        file.writelines(js_content)

# Función principal
def main():
    juego = obtener_datos_juego()
    agregar_juego_a_js(juego)
    print("El juego ha sido agregado exitosamente al archivo JavaScript.")

if __name__ == '__main__':
    main()
