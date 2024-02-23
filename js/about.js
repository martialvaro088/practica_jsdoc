/**
 * Índice que mantiene el seguimiento de la posición de la imagen actual.
 * @type {number}
 */
let currentIndex = 0;

/**
 * Array que contiene las rutas de las imágenes.
 * @type {Array<string>}
 */
const images = [
    './images/imagen1.png',
    './images/imagen2.jpg',
    './images/imagen3.png'
];

/**
 * Función para cambiar la imagen al hacer clic.
 * Si la imagen ya existe en el DOM, actualiza su ruta.
 * Si no existe, crea un nuevo elemento de imagen y lo agrega al DOM.
 */
function cambiar() {
    /**
     * Elemento de imagen existente en el DOM.
     * @type {HTMLImageElement}
     */
    let imageElement = document.querySelector('.content img');

    // Verificar si la imagen existe en el DOM
    if (!imageElement) {
        // Crear un nuevo elemento de imagen si no existe
        imageElement = document.createElement('img');
        imageElement.classList.add('content-img');
        document.querySelector('.content').appendChild(imageElement);
    }

    // Establecer la ruta de la imagen actual
    imageElement.src = images[currentIndex];

    // Incrementar el índice para cambiar a la siguiente imagen, asegurándose de que el índice se reinicie si alcanza el límite
    currentIndex = (currentIndex + 1) % images.length;
}

// Llamar a la función cambiar() inicialmente para mostrar la primera imagen
cambiar();

// Añadir un evento de clic al elemento de imagen para cambiar la imagen al hacer clic en ella
document.querySelector('.content').addEventListener('click', cambiar);
