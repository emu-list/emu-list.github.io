def main():
    import os

    # Leer el contenido actual del archivo scripts.js
    if os.path.exists("scripts.js"):
        with open("scripts.js", "r") as file:
            lines = file.readlines()
    else:
        print("El archivo scripts.js no existe en el directorio actual.")
        return

    # Encontrar la línea que contiene 'const games = ['
    start_index = -1
    end_index = -1
    for i, line in enumerate(lines):
        if 'const games = [' in line:
            start_index = i
        elif start_index != -1 and '];' in line:
            end_index = i
            break

    if start_index == -1 or end_index == -1:
        print("No se encontró el bloque 'const games = [' o '];' en el archivo scripts.js.")
        return

    # Extraer el contenido antes y después del bloque 'const games = [ ... ];'
    before_games = lines[:start_index + 1]
    after_games = lines[end_index:]

    # Extraer el contenido actual de games
    current_games = lines[start_index + 1:end_index]

    # Añadir nuevos juegos
    while True:
        name = input("Nombre del juego: ")
        compatibility = input("Compatibilidad (verde, naranja, rojo): ")
        code = input("Código del procesador (e.g., SD720G): ")
        console = input("Emulador/Consola (e.g., Winlator 6.1): ")

        game = f"    {{ name: '{name}', compatibility: '{compatibility}', code: '{code}', console: '{console}' }},\n"
        current_games.append(game)

        more = input("¿Deseas añadir otro juego? (s/n): ")
        if more.lower() != 's':
            break

    # Combinar todas las partes
    updated_lines = before_games + current_games + after_games

    # Escribir el contenido actualizado en scripts.js
    with open("scripts.js", "w") as file:
        file.writelines(updated_lines)

    print("Archivo 'scripts.js' actualizado exitosamente.")

if __name__ == "__main__":
    main()
