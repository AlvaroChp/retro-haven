// Validación del formulario de registro por javascript con try/catch/finally y selects anidados

// espera a que todo el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    try {
        // selecciona el formulario principal (ahora con el id correcto)
        const formulario = document.getElementById('formulario-retro');
        
        // elementos del formulario original
        const campoNombre = document.getElementById('nombre');
        const selectorAnio = document.getElementById('anio_nacimiento');
        const campoEmail = document.getElementById('email');
        const campoComentarios = document.getElementById('comentarios');
        const checkboxNewsletter = document.getElementById('newsletter');
        const campoFrecuencia = document.getElementById('frecuencia');
        const btnReset = document.getElementById('resetear-comentarios');

        // nuevos elementos para los selects anidados
        const selectMarca = document.getElementById('marca_consola');
        const selectModelo = document.getElementById('modelo_consola');
        const imagenPreview = document.getElementById('preview-consola');
        const descripcionConsola = document.getElementById('descripcion-consola');

        // contadores de caracteres
        const contadorNombre = document.getElementById('contador-nombre');
        const contadorComentarios = document.getElementById('contador-comentarios');

        // mensajes de error personalizados
        const mensajesError = {
            nombre: 'el nombre debe tener entre 2 y 50 caracteres',
            anio: 'selecciona un año válido',
            email: 'ingresa un email válido (ej: usuario@dominio.com)',
            comentarios: 'máximo 200 caracteres',
            frecuencia: 'selecciona una frecuencia',
            consola: 'selecciona un modelo de consola'
        };

        // expresión regular para validar emails (sacada de un foro)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // datos de consolas para los selects anidados
        const consolasPorMarca = {
            nintendo: [
                { modelo: "NES", imagen: "nes.png", descripcion: "NES (1983)" },
                { modelo: "SNES", imagen: "snes.png", descripcion: "Super Nintendo (1990)" },
                { modelo: "Nintendo 64", imagen: "n64.png", descripcion: "Nintendo 64 (1996)" },
                { modelo: "GameCube", imagen: "gamecube.png", descripcion: "GameCube (2001)" }
            ],
            sega: [
                { modelo: "Master System", imagen: "mastersystem.png", descripcion: "Master System(1985)" },
                { modelo: "Mega Drive", imagen: "megadrive.png", descripcion: "Mega Drive (1988)" },
                { modelo: "Sega Saturn", imagen: "segasaturn.png", descripcion: "Sega Saturn (1994)" },
                { modelo: "Dreamcast", imagen: "dreamcast.png", descripcion: "Dreamcast (1998)" }
            ],
            sony: [
                { modelo: "PlayStation", imagen: "ps1.png", descripcion: "PlayStation (1994) primera videoconsola de Sony." },
                { modelo: "PlayStation 2", imagen: "ps2.png", descripcion: "PlayStation 2 (2000) la videoconsola más vendida de la historia." }
            ],
            atari: [
                { modelo: "Atari 2600", imagen: "atari2600.png", descripcion: "Atari 2600 (1977)" },
                { modelo: "Atari 5200", imagen: "atari5200.png", descripcion: "Atari 5200 (1982)" },
                { modelo: "Atari 7800", imagen: "atari7800.png", descripcion: "Atari 7800 (1984)" },
                { modelo: "Atari Jaguar", imagen: "atarijaguar.png", descripcion: "Atari Jaguar (1993)" }
            ]
        };

        // muestra mensajes de error bajo los campos
        function mostrarError(campo, mensaje) {
            try {
                let error = campo.nextElementSibling;
                if (!error || !error.classList.contains('mensaje-error')) {
                    error = document.createElement('div');
                    error.className = 'mensaje-error';
                    campo.parentNode.insertBefore(error, campo.nextSibling);
                }
                error.textContent = mensaje;
                campo.classList.add('error');
            } catch (error) {
                console.error('error al mostrar mensaje:', error);
            }
        }

        // limpia los mensajes de error
        function limpiarError(campo) {
            try {
                campo.classList.remove('error');
                const error = campo.nextElementSibling;
                if (error && error.classList.contains('mensaje-error')) {
                    error.remove();
                }
            } catch (error) {
                console.error('error al limpiar mensaje:', error);
            }
        }

        // actualiza los contadores de caracteres
        function actualizarContador(campo, contador, max) {
            try {
                const longitud = campo.value.length;
                contador.textContent = `${longitud}/${max}`;
                contador.style.color = longitud > max * 0.8 ? 'orange' : '';
            } catch (error) {
                console.error('error en contador:', error);
            }
        }

        //  VALIDACIONES 

        function validarNombre() {
            try {
                const valor = campoNombre.value.trim();
                if (valor.length < 2 || valor.length > 50) {
                    mostrarError(campoNombre, mensajesError.nombre);
                    return false;
                }
                limpiarError(campoNombre);
                return true;
            } catch (error) {
                console.error('error validando nombre:', error);
                return false;
            }
        }

        function validarAnio() {
            try {
                const anioActual = new Date().getFullYear();
                if (!selectorAnio.value || selectorAnio.value < 1910 || selectorAnio.value > anioActual) {
                    mostrarError(selectorAnio, mensajesError.anio);
                    return false;
                }
                limpiarError(selectorAnio);
                return true;
            } catch (error) {
                console.error('error validando año:', error);
                return false;
            }
        }

        function validarEmail() {
            try {
                if (!regexEmail.test(campoEmail.value.trim())) {
                    mostrarError(campoEmail, mensajesError.email);
                    return false;
                }
                limpiarError(campoEmail);
                return true;
            } catch (error) {
                console.error('error validando email:', error);
                mostrarError(campoEmail, 'error inesperado');
                return false;
            }
        }

        function validarComentarios() {
            try {
                if (campoComentarios.value.length > 200) {
                    mostrarError(campoComentarios, mensajesError.comentarios);
                    return false;
                }
                limpiarError(campoComentarios);
                return true;
            } catch (error) {
                console.error('error validando comentarios:', error);
                return false;
            }
        }

        function validarNewsletter() {
            try {
                if (checkboxNewsletter.checked && !campoFrecuencia.value) {
                    mostrarError(campoFrecuencia, mensajesError.frecuencia);
                    return false;
                }
                limpiarError(campoFrecuencia);
                return true;
            } catch (error) {
                console.error('error validando newsletter:', error);
                return false;
            }
        }

        function validarConsola() {
            try {
                // ahora no es obligatorio, solo valida si se seleccionó marca pero no modelo
                if (selectMarca.value && !selectModelo.value) {
                    mostrarError(selectModelo, mensajesError.consola);
                    return false;
                }
                limpiarError(selectModelo);
                return true;
            } catch (error) {
                console.error('error validando consola:', error);
                return false;
            }
        }

        //SELECT ANIDADOS

        //marca de consola
        selectMarca.addEventListener('change', function() {
            const marca = this.value;
            selectModelo.innerHTML = '<option value="" selected disabled>Elige un modelo</option>';
            
            if (marca) {
                consolasPorMarca[marca].forEach(consola => {
                    const option = new Option(consola.modelo, consola.modelo);
                    selectModelo.add(option);
                });
                selectModelo.disabled = false;
            } else {
                selectModelo.disabled = true;
            }
            
            imagenPreview.src = "../img/consolas/consola.png";
            descripcionConsola.textContent = "selecciona un modelo para ver detalles";
        });

        //modelo de consola
        selectModelo.addEventListener('change', function() {
            try {
                const modelo = this.value;
                if (!modelo) return;
                
                const marca = selectMarca.value;
                const consola = consolasPorMarca[marca].find(c => c.modelo === modelo);
                
                imagenPreview.src = `../img/consolas/${consola.imagen}`;
                descripcionConsola.textContent = consola.descripcion;
            } catch (error) {
                console.log('error al mostrar detalles:', error);
            } finally {
            console.log('acción completada a las', new Date().toLocaleTimeString());
            }
        });


        //eventos originales del formulario
        campoNombre.addEventListener('input', function() {
            validarNombre();
            actualizarContador(campoNombre, contadorNombre, 50);
        });

        campoComentarios.addEventListener('input', function() {
            validarComentarios();
            actualizarContador(campoComentarios, contadorComentarios, 200);
        });

        checkboxNewsletter.addEventListener('change', function() {
            try {
                campoFrecuencia.style.display = this.checked ? 'block' : 'none';
                if (!this.checked) limpiarError(campoFrecuencia);
            } catch (error) {
                console.error('error en newsletter:', error);
            }
        });

        btnReset.addEventListener('click', function() {
            try {
                campoComentarios.value = '';
                contadorComentarios.textContent = '0/200';
                limpiarError(campoComentarios);
            } catch (error) {
                console.error('error al resetear:', error);
            }
        });

        //envío del formulario
        formulario.addEventListener('submit', function(e) {
            let formularioValido = false;
            
            try {
                e.preventDefault();
                
                // ejecuta todas las validaciones
                const validaciones = [
                    validarNombre(),
                    validarAnio(),
                    validarEmail(),
                    validarComentarios(),
                    validarNewsletter()
                ];
                
                formularioValido = validaciones.every(v => v === true);

                if (formularioValido) {
                    try {
                        console.log('formulario válido');
                        alert('formulario válido');
                    } catch (errorEnvio) {
                        console.error('error al enviar:', errorEnvio);
                        alert('hubo un problema al enviar el formulario');
                    }
                } else {
                    console.log('corrige los errores marcados');
                }
            } catch (error) {
                console.error('error inesperado:', error);
                alert('ocurrió un error inesperado');
            } finally {
                if (!formularioValido) {
                    console.log('el formulario no se envió');
                }
            }
        });

    } catch (error) {
        console.error('error al cargar el script:', error);
        alert('el formulario no funciona correctamente');
    }
});