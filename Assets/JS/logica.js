function MostrarFormularioComunicar(){
    if(screen.width <= 768){
        document.getElementById('formularioComuniquemonos').style.display = "block";
        document.getElementById('formularioReserva').style.display = "none";
    } 
}

function MostrarFormularioReserva(){
    if(screen.width <= 768){
        document.getElementById('formularioReserva').style.display = "block";
        document.getElementById('formularioComuniquemonos').style.display = "none";
    } 
}

function GuardarDatosSugerencia(){
    var nombre = document.getElementById('inputnombre').value;
    var correo = document.getElementById('inputcorreo').value;

    alert("Muchas gracias " + nombre + ", hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + correo); 
}

function GuardarDatosReserva(){
    var nombre = document.getElementById('inputnombre2').value;
    var correo = document.getElementById('inputcorreo2').value;
    var asistentes = document.getElementById('inputasistentes').value;

    alert("Estimado: " + nombre + " agradecemos por reservar con nosotros. Hemos registrado " + asistentes + " asistentes. Se ha enviado el código de confirmación al correo " + correo + "\nGracias por preferirnos."); 
}

const formToReset = document.getElementById('formularioCOMUNIQUEMONOS');
formToReset.addEventListener('submit', (e) => {
   e.preventDefault();
   formToReset.reset();
});

const formToReset2 = document.getElementById('formularioRESERVA');
formToReset2.addEventListener('submit', (e) => {
   e.preventDefault();
   formToReset2.reset();
});


// Conseguir el modal
var modal1 = document.getElementById("myModal1");

// Conseguir el boton para abrir el modal
var btn1 = document.getElementById("myBtn1");

// Conseguir el span para cerrar el modal
var span = document.getElementsByClassName("close")[0];

// Abrir el modal después del click
btn1.onclick = function() {
    modal1.style.display = "block";
  }
  
  // Cerrar el modal
  span.onclick = function() {
    modal1.style.display = "none";
  }
  


// Conseguir el modal
var modal2 = document.getElementById("myModal2");

// Conseguir el boton para abrir el modal
var btn2 = document.getElementById("myBtn2");

// Conseguir el span para cerrar el modal
var span = document.getElementsByClassName("close")[1];

// Abrir el modal después del click
btn2.onclick = function() {
    modal2.style.display = "block";
}
  
  // Cerrar el modal
  span.onclick = function() {
    modal2.style.display = "none";
  }
  
 

// Conseguir el modal
var modal3 = document.getElementById("myModal3");

// Conseguir el boton para abrir el modal
var btn3 = document.getElementById("myBtn3");

// Conseguir el span para cerrar el modal
var span3 = document.getElementsByClassName("close")[2];

// Abrir el modal después del click
btn3.onclick = function() {
  modal3.style.display = "block";
}

// Cerrar el modal
span3.onclick = function() {
  modal3.style.display = "none";
}



// Conseguir el modal
var modalSN = document.getElementById("modalSobreNosotros");

// Conseguir el boton para abrir el modal
var botonSN = document.getElementById("botonSobreNosotros");

// Conseguir el span para cerrar el modal
var span4 = document.getElementsByClassName("close")[3];

// Abrir el modal después del click
botonSN.onclick = function() {
  modalSN.style.display = "block";
}

// Cerrar el modal
span4.onclick = function() {
  modalSN.style.display = "none";
}



// Cerrar el modal cuando se da click en cualquier lugar de la pantalla
window.onclick = function(event) {
  if (event.target == modalSN) {
    modalSN.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}