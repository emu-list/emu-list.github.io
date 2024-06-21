const juegos = [
    {
        nombre: "FIFA 14",
        compatibilidad: "verde",
        emulador: "winlator",
        gpu: "SD732G",
        color: "green"
    },
    {
        nombre: "FIFA 19",
        compatibilidad: "verde",
        emulador: "winlator",
        gpu: "SD732G",
        color: "green"
    },
    {
        nombre: "FIFA 19",
        compatibilidad: "verde",
        emulador: "winlator",
        gpu: "SD732G",
        color: "green"
    },
    {
        nombre: "WARZONE",
        compatibilidad: "naranja",
        emulador: "winlator",
        gpu: "SD732G",
        color: "orange"
    },
    {
        nombre: "WARZONE",
        compatibilidad: "naranja",
        emulador: "winlator",
        gpu: "SD732G",
        color: "orange"
    },
    {
        nombre: "PvZ2",
        compatibilidad: "amarillo",
        emulador: "mobox",
        gpu: "SD732G",
        color: "yellow"
    },
    {
        nombre: "PvZ2",
        compatibilidad: "amarillo",
        emulador: "mobox",
        gpu: "SD732G",
        color: "yellow"
    },
    {
        nombre: "PvZ2",
        compatibilidad: "amarillo",
        emulador: "mobox",
        gpu: "SD732G",
        color: "yellow"
    },
    {
        nombre: "PvZ2",
        compatibilidad: "amarillo",
        emulador: "mobox",
        gpu: "SD732G",
        color: "yellow"
    },
    {
        nombre: "Jumanji",
        compatibilidad: "rojo",
        emulador: "wow64",
        gpu: "SD732G",
        color: "red"
    },
     {
        nombre: "Jumanji",
        compatibilidad: "rojo",
        emulador: "wow64",
        gpu: "SD732G",
        color: "red"
    },
     {
        nombre: "Jumanji",
        compatibilidad: "rojo",
        emulador: "wow64",
        gpu: "SD732G",
        color: "red"
    }
];

function renderJuegos() {
    const listaJuegos = document.getElementById('lista-juegos');
    listaJuegos.innerHTML = '';

    juegos.forEach(juego => {
        const item = document.createElement('div');
        item.className = 'item';
        item.setAttribute('data-compatibilidad', juego.compatibilidad);

        const descripcion = document.createElement('p');
        descripcion.innerHTML = `${juego.nombre} <span style="color: ${juego.color};">Emulador:</span> ${juego.emulador} <span style="color: ${juego.color};">GPU:</span> ${juego.gpu}`;
        item.appendChild(descripcion);

        const barra = document.createElement('div');
        barra.className = 'progress';

        const progressBar = document.createElement('div');
        // Asigna la clase correcta según la compatibilidad
        let progressBarClass = '';
        switch (juego.compatibilidad) {
            case 'verde':
                progressBarClass = 'bg-success';
                break;
            case 'amarillo':
                progressBarClass = 'bg-warning';
                break;
            case 'naranja':
                progressBarClass = 'bg-orange'; // Asegúrate de que se usa bg-orange aquí
                break;
            case 'rojo':
                progressBarClass = 'bg-danger';
                break;
        }

        progressBar.className = `progress-bar ${progressBarClass}`;
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-valuenow', '100');
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', '100');
        progressBar.style.width = '100%'; // Barra completa, no aleatoria
        barra.appendChild(progressBar);

        item.appendChild(barra);
        listaJuegos.appendChild(item);
    });
}

function filterItems(color) {
    // Ocultar todos los ítems
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = 'none';
    });

    // Mostrar los ítems que coincidan con el color seleccionado
    const filteredItems = document.querySelectorAll(`.item[data-compatibilidad="${color}"]`);
    filteredItems.forEach(item => {
        item.style.display = 'block';
    });
}

// Inicialmente renderizar todos los juegos y mostrar todos los ítems
renderJuegos();
filterItems('verde');
filterItems('amarillo');
filterItems('naranja');
filterItems('rojo');