//Varias de los items del proyecto agrupados y que afectan a todas o a casi todas las páginas

document.addEventListener('DOMContentLoaded', () => {
    actualizarFooter();
});

// esto actualiza dinámicamente el año de todos los footer
const actualizarFooter = () => {
    const anioActual = new Date().getFullYear();
    const footers = document.querySelectorAll('footer');

    footers.forEach(footer => {
        const parrafo = footer.querySelector('p');
        if (parrafo) {
            parrafo.textContent = `${anioActual} Álvaro Chillarón Prats`;
        }
    });
};