      function validarFormulario(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
      
        // Obtener los valores de los campos
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;
      
        // Validar los campos
        if (nombre === "" || email === "" || mensaje === "") {
          alert("Por favor, complete todos los campos");
        } else {
          alert("Gracias por su mensaje. Nos pondremos en contacto pronto.");
          document.getElementById("contacto-form").reset(); // Reiniciar el formulario
        }
      }