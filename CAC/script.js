document.addEventListener("DOMContentLoaded", function() {
    var nombreInput = document.getElementById("nombre");
    var checkboxes = document.querySelectorAll('input[name="opcion"]');
    // var cantidadInputs = document.querySelectorAll('.cantidad');
    var botonEnviar = document.getElementById("boton");

    // checkboxes.forEach(function(checkbox, index) {
    //     checkbox.addEventListener("change", function() {
    //         if (checkbox.checked) {
    //             cantidadInputs[index].style.display = "block";
    //         } else {
    //             cantidadInputs[index].style.display = "none";
    //         }
    //     });
    // });

    botonEnviar.addEventListener("click", function() {
        var nombre = nombreInput.value;
        var opcionesSeleccionadas = [];

        checkboxes.forEach(function(checkbox, index) {
            if (checkbox.checked) {
                // var cantidad = cantidadInputs[index].value || 1; // Si no se ingresa cantidad, se asume 1
                opcionesSeleccionadas.push(`1x ${checkbox.value}`);
            }
        });

        if (nombre && opcionesSeleccionadas.length > 0) {
            var mensaje = `Hola! Pedido de ${nombre}: ${opcionesSeleccionadas.join(", ")}. Precio final: x. Forma de pago: x`;
            var telefono = "5493571521300";
            var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
            window.open(url, "_blank");
        } else {
            alert("Por favor, ingresa tu nombre y selecciona al menos una opción.");
        }
    });
});