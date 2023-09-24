document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del DOM
    const hambButton = document.querySelector('#menu');
    const navContent = document.querySelector('.nav-content');

    // Función para abrir y cerrar el menú
    function toggleMenu() {
        navContent.classList.toggle('active')
    }

    // Agregar un evento de click al menu desplegable
    hambButton.addEventListener('click', toggleMenu);


});

