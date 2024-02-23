/**
 * Valida y procesa el formulario de contacto.
 * @returns {void}
 */
function validate() {
    // Obtiene el formulario de contacto del DOM
    const contactForm = document.getElementById('contactForm');

    // Agrega un evento de escucha para el envío del formulario
    /**
     * Maneja el evento de envío del formulario.
     * @param {Event} e - El evento de envío del formulario.
     */
    contactForm.addEventListener('submit', (e) => {
        // Previene la recarga de la página al enviar el formulario
        e.preventDefault();

        // Obtiene los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Verifica si el nombre y el mensaje no están vacíos
        if (name.trim() !== '' && message.trim() !== '') {
            // Muestra un mensaje de agradecimiento con el nombre del remitente
            alert(`¡Gracias por tu mensaje, ${name}!`);
            // Resetea el formulario después del envío
            contactForm.reset();
        } else {
            // Si algún campo está vacío, muestra un mensaje de alerta
            alert('Por favor, completa todos los campos.');
        }
    });
}
