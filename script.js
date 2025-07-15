document.addEventListener('DOMContentLoaded', () => {
    const malla = document.getElementById('malla');

    // Crear la malla
    for (let i = 0; i < 25; i++) {
        const item = document.createElement('div');
        item.classList.add('malla-item');
        item.textContent = i + 1;

        // Añadir interactividad
        item.addEventListener('click', () => {
            alert(`Haz hecho clic en el cuadro ${i + 1}`);
        });

        malla.appendChild(item);
    }
});
