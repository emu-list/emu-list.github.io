
---

# Eliminación de Líneas Duplicadas en scripts.js

Este script de Python está diseñado para encontrar y eliminar líneas duplicadas en un archivo `scripts.js` que contiene una lista de juegos en un formato específico.

## Uso

### Ejecución del Script

1. **Requisitos Previos**
   - Python 3 instalado en tu sistema. Puedes descargarlo desde [python.org](https://www.python.org/).

2. **Instalación de Dependencias**
   - Antes de ejecutar el script, asegúrate de tener instaladas las siguientes bibliotecas Python:
     ```bash
     pip install unidecode colorama
     ```

3. **Ejecución del Script**
   - Coloca el archivo `scripts.js` en el mismo directorio que el script Python `eliminar-duplicadas.py`.
   - Abre una terminal o línea de comandos.
   - Navega hasta el directorio donde se encuentran los archivos.
   - Ejecuta el script con el siguiente comando:
     ```bash
     python eliminar-duplicadas.py
     ```

4. **Interacción con el Script**
   - El script buscará nombres duplicados en la sección `const games = [...]` del archivo `scripts.js`.
   - Si encuentra duplicados, mostrará los nombres y las líneas donde se encuentran.
   - Te preguntará si deseas eliminar las líneas duplicadas anteriores (las líneas más antiguas).

5. **Confirmación de Eliminación**
   - Responde `sí`, `si`, `yes` o `y` para eliminar las líneas duplicadas anteriores.
   - Las líneas duplicadas anteriores se eliminarán del archivo `scripts.js` y se guardará automáticamente.

### Bibliotecas Utilizadas

- **unidecode**: Biblioteca utilizada para transliterar caracteres Unicode a ASCII. Esto ayuda a normalizar los nombres de los juegos para una comparación más sencilla y precisa.
  
- **colorama**: Biblioteca que proporciona una forma simple de usar colores ANSI en terminales. Se utiliza para resaltar los mensajes impresos en la consola, como los nombres duplicados y las líneas afectadas.

### Funcionamiento Interno

- El script comienza leyendo el contenido del archivo `scripts.js` y busca específicamente la sección que contiene la lista de juegos.
  
- Utiliza expresiones regulares para identificar y normalizar los nombres de los juegos, lo que facilita la comparación para detectar duplicados.
  
- Después de encontrar duplicados, ofrece al usuario la opción de eliminar las líneas duplicadas anteriores (las líneas más antiguas) del archivo `scripts.js`.
  
- El proceso de eliminación garantiza que las líneas duplicadas anteriores se eliminen en orden inverso para evitar problemas con los índices de las líneas restantes.

### Ejemplo de Uso

Supongamos que tienes un archivo `scripts.js` con una lista de juegos en el formato:

```javascript
const games = [
    { name: 'Just Cause', compatibility: 'green', code: 'SD720G', console: 'Winlator 7' },
    { name: 'Halo CE', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
    { name: 'Just Cause', compatibility: 'green', code: 'SD720G', console: 'Winlator 7' },
    { name: 'Resident Evil 5', compatibility: 'orange', code: 'SD720G', console: 'Winlator 6.1' },
];
```

Al ejecutar el script, detectará que 'Just Cause' y 'Resident Evil 5' están duplicados y te pedirá que confirmes la eliminación de las líneas anteriores de estos juegos.

---

---

# Agregar Nuevo Juego a scripts.js

El script `new-game.py` está diseñado para agregar nuevos juegos a la lista existente en el archivo `scripts.js`. Este archivo debe contener una estructura válida de JavaScript que inicialice una lista de juegos (`const games = [...]`).

## Uso

### Ejecución del Script

1. **Preparación**
   - Asegúrate de tener Python 3 instalado en tu sistema. Puedes descargarlo desde [python.org](https://www.python.org/).

2. **Ejecución del Script**
   - Coloca el archivo `scripts.js` en el mismo directorio que el script Python `new-game.py`.
   - Abre una terminal o línea de comandos.
   - Navega hasta el directorio donde se encuentran los archivos.
   - Ejecuta el script con el siguiente comando y proporciona los detalles del nuevo juego cuando se solicite:
     ```bash
     python new-game.py
     ```

3. **Ingresar Detalles del Juego**
   - El script te pedirá ingresar los detalles del nuevo juego, incluyendo el nombre, compatibilidad, código y consola.

4. **Actualización del Archivo `scripts.js`**
   - Después de ingresar los detalles del juego, el script agregará automáticamente el nuevo juego a la lista en el archivo `scripts.js`.

### Funcionamiento Interno

- El script solicita al usuario que ingrese los detalles del nuevo juego, como nombre, compatibilidad, código y consola.
  
- Utiliza la biblioteca `json` de Python para cargar y actualizar la lista de juegos en el archivo `scripts.js`.
  
- Una vez que se ingresan los detalles del juego, el script añade un nuevo objeto de juego a la lista existente en el archivo `scripts.js`.

### Ejemplo de Uso

Supongamos que deseas agregar un nuevo juego llamado "Cyberpunk 2077" con los siguientes detalles:

- Nombre: Cyberpunk 2077
- Compatibilidad: green
- Código: SD720G
- Consola: Winlator 7

Al ejecutar el script `new-game.py`, ingresarías estos detalles cuando se te solicite, y el script se encargaría de agregar el juego automáticamente a la lista en `scripts.js`.

---

