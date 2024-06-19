#!/bin/bash
clear
cd ~
rm .gitconfig
# Actualizar los paquetes de Termux
yes | pkg update && yes | pkg upgrade

sleep 1
# Instalar Python y Git
yes | pkg install python git -y

sleep 1
# Instalar wget
pkg install wget -y

sleep 1
# Descargar el archivo desde una URL específica
wget https://raw.githubusercontent.com/emu-list/emu-list.github.io/main/.gitconfig

sleep 1
# Clonar el repositorio desde GitHub
git clone https://github.com/emu-list/emu-list.github.io.git


sleep 1
echo "Termux y los paquetes necesarios han sido actualizados e instalados, el repositorio ha sido clonado, y el archivo Python ha sido descargado."
