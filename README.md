> [!NOTE]
> El único archivo a modificar es el
> `scripts.js` donde contiene La tabla
> de lista de juegos compatibles y
> debera ser añadido dentro de:
* Puedes dezliar de derecha a izquierda dentro del rectángulo de abajo para ver la linea completa.

```js
const games = [

    { name: 'NombreDelJuego', compatibility: 'Color Ingles', code: 'Procesador', console: 'Emulador' },
];
```
## COMANDO TERMUX 👇
```Bash
 curl -O https://raw.githubusercontent.com/emu-list/emu-list.github.io/main/clone.sh && chmod +x clone.sh && bash clone.sh
```
> con el comando de arriba solo se hará la primera vez para clonar el repositorio ya después solo es editar conforme sea necesario
* Para entrar a la carpeta principal del desarrollo es con:

```
cd ~/emu-list.github.io
```
______________________________________
## MODIFICACIÓN MANUAL

> [!TIP]
> Los colores son:
- green (Para el Verde) ✔️
- yellow (Para el Amarillo) ✔️
- orange (Para el Naranja) ✔️
- red (Para el Rojo) ✔️

> [!IMPORTANT]
> No deberas modificar nada más del archivo solo añadir el juego nuevo
> como en la linea del principio explicada dentro de esa estructura

> [!CAUTION]
> Deberás Tener precaución de no borrar por accidente cualquier otra linea de las que ya estan ahi.
>
______________________________________
## MODIFICACIÓN AUTOMATICA
<p align="center">
<img src="automatic.png">
</p>

https://github.com/emu-list/emu-list.github.io/assets/173104326/8e12a87b-0448-46db-86af-ea523cab3404

> [!NOTE]
> Deberás ejecutar el script python que esta en el directorio de trabajo con `ls` podras ver los archivos que estan dentro de la carpeta `cd ~/emu-list.github.io` simplemente ejecutaras el comando `python new-game.py` y ingresaras los datos, automáticamente tendras el nuevo juego añadido como en el video de aquí abajo de ejemplo.



______________________________________

## SUBIENDO LO ACTUALIZADO..🌐
> [!NOTE]
> Una vez hayas agregado los nuevos juegos al archivo mencionado al principio y guardado los cambios

**Deberas ejecutar el archivo remote.sh**
Para asi subir la actualización aquí.
**commit**: Seria la versión un nombre que quieras 

- EJEMPLO:
`version1`

- EJEMPLO 2:
`nuevoJuego`

- **La rama solicitada es:** `main`
  
- **El usuario es:** `emu-list`
  
- **contraseña es:**  *********
  
pidemela en telegram xD 

> [!TIP]
> Una vez realizado eso se abra actualizado el repositorio y los cambios se veran reflejados en unos minutos en el sitio web
> cada vez que queiras realizar un cambio deberas ...
- Entrar a la carpeta del proyecto
- Editar El archivo
- ejecutar el `remote.sh` con
```
bash remote.sh
``` 
> Muy fácil ya después para actualizar la página web 

### Podras Acceder al Sitio web Aquí abajo para ver la lista compatible de los juegos.
__________________________________________________
[emu-list.github.io](https://emu-list.github.io/)
__________________________________________________
