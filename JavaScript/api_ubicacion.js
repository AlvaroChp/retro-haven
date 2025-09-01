// esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    
    //configuración del mapa
    const coordenada = [38.982890, -0.519620]; //mis coordenadas
    const zoomInicial = 15;
    

    //inicio del mapa
    const mapa = L.map('mapa').setView(coordenada, zoomInicial);
    
    // Añadir capa base de OpenStreetMap, sacado de un foro
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);
    
    //marcador de ubicación
    const marcadorUbicacion = L.marker(coordenada).addTo(mapa);
    marcadorUbicacion.bindPopup('<b>RETRO HAVEN</b><br>Tu sitio web de confianza sobre videojuegos retro.').openPopup();
    
});