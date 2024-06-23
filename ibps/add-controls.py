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
