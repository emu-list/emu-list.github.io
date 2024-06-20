import re
from unidecode import unidecode

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
            game_lines.append((i, line.strip()))

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
            print(f"Duplicate name '{name}' found at lines: {', '.join(map(str, lines))}")
    else:
        print("No duplicate names found.")

find_duplicate_names('scripts.js')
