function enviarMensaje(event) {
    event.preventDefault(); 

    let nombre = document.getElementById("nombreID");
    let apellido = document.getElementById("apellidoID");
    let correo = document.getElementById("correoID");
    let mensaje = document.getElementById("mensajeID");
    
    function validarCampo(campo) {
        if(campo.value.trim() === "") {
            campo.style.borderColor = "red";
            return false;
        } else {
            campo.style.borderColor = "initial"; 
            return true;
        }
    }

    let esNombreValido = validarCampo(nombre);
    let esApellidoValido = validarCampo(apellido);
    let esCorreoValido = validarCampo(correo);
    let esMensajeValido = validarCampo(mensaje);

    if(esNombreValido && esApellidoValido && esCorreoValido && esMensajeValido) {
        console.log(nombre.value, apellido.value, correo.value, mensaje.value);
        alert(`Muchas gracias por tu mensaje, ${nombre.value} ${apellido.value}! Enviaremos una respuesta en breve a ${correo.value}.`);
    } else {
        alert("Por favor, completa todos los campos.");
    }

    document.getElementById("nombreID").addEventListener("input", function() {
        restaurarEstilo(this);
    });

    document.getElementById("apellidoID").addEventListener("input", function() {
        restaurarEstilo(this);
    });

    document.getElementById("correoID").addEventListener("input", function() {
        restaurarEstilo(this);
    });

    document.getElementById("mensajeID").addEventListener("input", function() {
        restaurarEstilo(this);
    });
}

function restaurarEstilo(campo) {
    if (campo.value.trim() !== "") {
        campo.style.borderColor = "initial";
    }
}

function limpiarFormulario() {
    document.getElementById("nombreID").value = '';
    document.getElementById("apellidoID").value = '';
    document.getElementById("correoID").value = '';
    document.getElementById("mensajeID").value = '';

    
    document.getElementById("nombreID").style.borderColor = "initial";
    document.getElementById("apellidoID").style.borderColor = "initial";
    document.getElementById("correoID").style.borderColor = "initial";
    document.getElementById("mensajeID").style.borderColor = "initial";
    document.getElementById("limpiarFormulario").blur();
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("limpiarFormulario").addEventListener("click", limpiarFormulario);
});

document.addEventListener('DOMContentLoaded', function() {
    var socialIcons = document.querySelectorAll('.social-icons a');
    
    socialIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.blur();
        });
    });
});