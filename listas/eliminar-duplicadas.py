import re
from unidecode import unidecode
from colorama import Fore, Style, init

# Initialize colorama
init()

def normalize_name(name):
    return re.sub(r'\s+', ' ', unidecode(name).strip().lower())

def find_duplicate_names(filename):
    # Leer el contenido del archivo
    with open(filename, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    game_lines = []
    inside_games = False

    # Identificar las líneas que contienen juegos
    for i, line in enumerate(lines):
        if 'const games = [' in line:
            inside_games = True
        elif inside_games and '];' in line:
            inside_games = False
        elif inside_games:
            game_lines.append((i + 1, line.strip()))  # Guardar número de línea comenzando desde 1

    names = {}
    duplicates = {}

    # Patrón para extraer el nombre del juego
    name_pattern = re.compile(r"name:\s*'([^']+)'")

    # Buscar nombres duplicados
    for i, line in game_lines:
        match = name_pattern.search(line)
        if match:
            name = normalize_name(match.group(1))
            if name in names:
                if name not in duplicates:
                    duplicates[name] = [names[name]]
                duplicates[name].append(i)
            else:
                names[name] = i

    # Reportar duplicados encontrados
    if duplicates:
        for name, lines_found in duplicates.items():
            print(f"{Fore.YELLOW}Nombre duplicado{Style.RESET_ALL} '{Fore.GREEN}{name}{Style.RESET_ALL}' {Fore.YELLOW}encontrado en las líneas:{Style.RESET_ALL} {Fore.CYAN}{', '.join(map(str, lines_found))}{Style.RESET_ALL}")
        
        user_input = input(f"{Fore.YELLOW}¿Deseas eliminar las líneas duplicadas anteriores? (sí/no): {Style.RESET_ALL}").strip().lower()
        if user_input in ['sí', 'si', 'yes', 'y']:
            new_lines = lines[:]
            # Crear un set para almacenar los índices a eliminar
            indices_to_remove = set()
            for line_numbers in duplicates.values():
                for line_number in line_numbers[:-1]:  # Omitir la última (más reciente) ocurrencia
                    if 0 <= line_number - 1 < len(lines):
                        print(f"{Fore.RED}Eliminando la línea {line_number}: {Style.RESET_ALL}{lines[line_number - 1].strip()}")
                        indices_to_remove.add(line_number - 1)  # Agregar índice al set

            # Eliminar las líneas marcadas en orden inverso
            for index in sorted(indices_to_remove, reverse=True):
                del new_lines[index]

            # Guardar el archivo modificado
            with open(filename, 'w', encoding='utf-8') as file:
                file.writelines(new_lines)

            print(f"{Fore.GREEN}Líneas duplicadas eliminadas con éxito.{Style.RESET_ALL}")
        else:
            print("No se eliminaron líneas duplicadas.")
    else:
        print("No se encontraron nombres duplicados.")

# Llamar a la función para verificar el archivo 'scripts.js'
find_duplicate_names('scripts.js')
