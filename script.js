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
document.addEventListener('DOMContentLoaded', () => {
    // Función para aprobar un curso
    const aprobarCurso = (cursoId) => {
        const curso = document.getElementById(cursoId);
        curso.classList.add('aprobado');
        curso.removeEventListener('click', aprobarCursoHandler);
        desbloquearCursos(cursoId);
    };

    // Función para desbloquear cursos si los requisitos están cumplidos
    const desbloquearCursos = (cursoId) => {
        const cursos = document.querySelectorAll('.curso');
        cursos.forEach((curso) => {
            const requisitos = JSON.parse(curso.getAttribute('data-requisitos'));
            if (requisitos.includes(cursoId) && !curso.classList.contains('aprobado')) {
                curso.classList.add('desbloqueado');
                curso.addEventListener('click', aprobarCursoHandler);
            }
        });
    };

    // Handler de click para aprobar un curso
    const aprobarCursoHandler = (event) => {
        const cursoId = event.target.id;
        aprobarCurso(cursoId);
    };

    // Inicializar los cursos y su interactividad
    const cursos = document.querySelectorAll('.curso');
    cursos.forEach((curso) => {
        curso.addEventListener('click', aprobarCursoHandler);
    });
});
