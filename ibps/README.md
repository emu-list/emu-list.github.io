Vamos a actualizar tu script Python para que permita agregar múltiples categorías a cada `div`. Aquí está la versión actualizada del script:

```python
import html

def create_download_div(categories, title, description, link):
    categories_str = ",".join([html.escape(cat.strip()) for cat in categories])
    div_structure = f"""
    <div class="descarga-item" data-category="{categories_str}">
        <h2 class="oswald-medium">{html.escape(title)}</h2>
        <p class="kanit-regular">{html.escape(description)}</p>
        <a href="{html.escape(link)}" class="btn descargar-btn"><i class="fas fa-download"></i> Descargar</a>
    </div>
    """
    return div_structure

def main():
    divs = []

    while True:
        # Solicitar datos al usuario
        categories = []
        while True:
            category = input("Introduce una categoría (data-category): ")
            categories.append(category)
            another_category = input("¿Quieres agregar otra categoría? (s/n): ").strip().lower()
            if another_category != 's':
                break
        
        title = input("Introduce el título (h2): ")
        description = input("Introduce la descripción (p): ")
        link = input("Introduce el enlace para el botón de descarga (href): ")
        
        # Crear el div con los datos proporcionados
        download_div = create_download_div(categories, title, description, link)
        divs.append(download_div)
        
        # Preguntar si desea agregar otro div
        another = input("¿Quieres crear otro div? (s/n): ").strip().lower()
        if another != 's':
            break

    # Guardar los divs en un archivo HTML
    with open("download_divs.html", "a", encoding="utf-8") as file:
        for div in divs:
            file.write(div)
    
    print("Div(s) de descarga creado(s) y guardado(s) en download_divs.html")

if __name__ == "__main__":
    main()
```

### Explicación de los cambios:
1. **Función `create_download_div`**:
    - Acepta una lista de categorías en lugar de una sola categoría.
    - Convierte la lista de categorías en una cadena separada por comas.

2. **Función `main`**:
    - Utiliza un bucle para permitir al usuario introducir múltiples categorías.
    - Después de cada categoría, pregunta si el usuario quiere agregar otra.
    - Si el usuario elige no agregar más categorías, continúa con las siguientes preguntas (título, descripción y enlace).
    - Después de recopilar todos los datos, crea el `div` con las categorías, título, descripción y enlace proporcionados.

Con estos cambios, el script ahora puede manejar múltiples categorías para cada `div` y te permite agregar tantas categorías como desees para cada entrada.
