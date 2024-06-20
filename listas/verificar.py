import re
from unidecode import unidecode
from colorama import Fore, Style, init

# Initialize colorama
init()

def normalize_name(name):
    return re.sub(r'\s+', ' ', unidecode(name).strip().lower())

def find_duplicate_names(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    game_lines = []
    inside_games = False

    for i, line in enumerate(lines):
        if 'const games = [' in line:
            inside_games = True
        elif inside_games and '];' in line:
            inside_games = False
        elif inside_games:
            game_lines.append((i + 1, line.strip()))  # Store line number starting from 1

    names = {}
    duplicates = {}

    name_pattern = re.compile(r"name:\s*'([^']+)'")

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

    if duplicates:
        for name, lines in duplicates.items():
            print(f"{Fore.YELLOW}Nombre duplicado{Style.RESET_ALL} '{Fore.GREEN}{name}{Style.RESET_ALL}' {Fore.YELLOW}encontrado en las líneas:{Style.RESET_ALL} {Fore.CYAN}{', '.join(map(str, lines))}{Style.RESET_ALL}")
    else:
        print("No se encontraron nombres duplicados.")

find_duplicate_names('scripts.js')
