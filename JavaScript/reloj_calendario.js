//RELOJ Y CALENDARIO

function Reloj() {
    //variable para obtener distintos valores en formato de fecha y hora
      const ahora = new Date();
  
    //Dias, meses y años
      const dia = ahora.getDate().toString().padStart(2, "0");
      const mes = (ahora.getMonth()+1).toString().padStart(2, "0");
      const año = ahora.getFullYear();
  
    //Horas, minutos y segundos
      const hora = ahora.getHours().toString().padStart(2, "0");
      const minuto = ahora.getMinutes().toString().padStart(2, "0");
      const segundo = ahora.getSeconds().toString().padStart(2, "0");
  
    //formato de la fecha completa
      const fechaYHora = dia + "/" + mes + "/" + año + " | " + hora + ":" + minuto + ":" + segundo;
    
      document.getElementById("reloj").textContent = fechaYHora;
  }
  setInterval(Reloj, 1000); //así se actualiza cada segundo
  Reloj(); //lo añado una vez más para que salga directamente al cargar la página


