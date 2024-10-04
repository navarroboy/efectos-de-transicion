

document.querySelectorAll('.leer-mas').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target'); // Obtener el id del texto adicional
        const textoAdicional = document.getElementById(targetId); // Seleccionar el texto adicional

        // Mostrar u ocultar el texto adicional
        if (textoAdicional.style.display === 'none' || textoAdicional.style.display === '') {
            textoAdicional.style.display = 'block'; // Mostrar
            button.textContent = 'Ocultar texto'; // Cambiar texto del botón
        } else {
            textoAdicional.style.display = 'none'; // Ocultar
            button.textContent = 'Leer mas'; // Cambiar texto del botón
        }
    });
});

// Opcional: Inicializar el texto adicional como oculto
document.querySelectorAll('.texto-adicional').forEach(texto => {
    texto.style.display = 'none';
});

const images = [
    
]
