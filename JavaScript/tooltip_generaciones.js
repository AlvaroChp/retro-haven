document.addEventListener("DOMContentLoaded", () => {
    
    // textos que aparecerán en los tooltips
    const tooltips = {
        "Primera Generación (1970s)": "Inicio de las consolas: Magnavox Odyssey y Pong.",
        "Segunda Generación (1970s a 1980s)": "Aparecen los cartuchos y Atari 2600 domina.",
        "Tercera Generación (1980s)": "Renacimiento con NES y clásicos como Zelda y Mario.",
        "Cuarta Generación (1980s a 1990s)": "Gráficos 2D pulidos y guerras entre Sega y Nintendo.",
        "Quinta Generación (Mediados de 1990s)": "Explosión del 3D: PlayStation, N64, Saturn.",
        "Sexta Generación (2000s)": "Conexión online y gráficos mejorados con PS2, Xbox y más.",
        "Séptima Generación (2000s a 2010s)": "Controles por movimiento y juego online masivo.",
        "Octava Generación (2010s)": "Digitalización, gráficos 4K y éxito híbrido con Switch.",
        "Novena Generación (2020s)": "Ray tracing, SSD y realismo casi total."
    };

    //estilos para el tooltip
    const tooltip = document.createElement("div");
    tooltip.style.position = "absolute";
    tooltip.style.background = "#111";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "8px";
    tooltip.style.fontSize = "0.9em";
    tooltip.style.zIndex = "1000";
    tooltip.style.pointerEvents = "none";
    tooltip.style.opacity = "0";
    tooltip.style.transition = "opacity 0.2s";
    document.body.appendChild(tooltip);

    document.querySelectorAll("summary h2").forEach(h2 => {
        
        //esto activa el tooltip al pasar por encima de los elementos de la lista
        h2.addEventListener("mouseover", (e) => {
            const text = tooltips[h2.textContent.trim()];
            if (text) {
                tooltip.textContent = text;
                tooltip.style.opacity = "1";
            }
        });

        //esto hace que el tooltip siga al ratón
        h2.addEventListener("mousemove", (e) => {
            tooltip.style.top = (e.pageY + 15) + "px";
            tooltip.style.left = (e.pageX + 15) + "px";
        });

        // esto desactiva el tooltip al quitar el ratón de encima de los elementos de la lista
        h2.addEventListener("mouseout", () => {
            tooltip.style.opacity = "0";
        });
    });
});