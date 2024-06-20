#!/bin/bash

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m' # No color

# Función para manejar errores
handle_error() {
    echo -e "${RED}Error: $1${NC}"
    exit 1
}

# Verificar si la carpeta .git existe en el directorio actual
if [ -d ".git" ]; then
    echo -e "${YELLOW}La carpeta .git ya existe en este directorio.${NC}"
fi

# Solicitar la versión del commit
read -p "Ingresa la versión del commit: " version
if [ -z "$version" ]; then
    handle_error "La versión del commit no puede estar vacía"
fi

# Solicitar la rama del proyecto
read -p "Ingresa la rama del proyecto: " rama
if [ -z "$rama" ]; then
    handle_error "El nombre de la rama no puede estar vacío"
fi

# Añadir cambios y confirmar con la versión del commit ingresada
echo -e "${GREEN}Agregando cambios al repositorio...${NC}"
git add . || handle_error "No se pudo agregar archivos al repositorio"
echo -e "${GREEN}Realizando commit...${NC}"
git commit -m "$version" || handle_error "No se pudo hacer el commit"

# Cambiar a la rama especificada (o crearla si no existe)
echo -e "${GREEN}Cambiando a la rama especificada...${NC}"
git checkout -B $rama || handle_error "No se pudo cambiar a la rama especificada"

# Empujar los cambios a la rama especificada
echo -e "${GREEN}Empujando cambios a GitHub...${NC}"
git push -u origin $rama || handle_error "No se pudo empujar los cambios a GitHub"

echo -e "${GREEN}¡Subida exitosa a GitHub!${NC}"
